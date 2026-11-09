/**
 * Accessibility Widget - Vanilla JavaScript
 * ADA Compliance Tool for WordPress & React
 * No dependencies required
 */

(function() {
  'use strict';

  // Default settings
  const defaultSettings = {
    fontSize: 'normal',
    highContrast: false,
    textSpacing: false,
    highlightLinks: false,
    bigCursor: false,
    readingGuide: false,
    dyslexiaFont: false,
    pauseAnimations: false
  };

  const STORAGE_KEY = 'accessibility-settings';

  class AccessibilityWidget {
    constructor() {
      this.settings = this.loadSettings();
      this.isOpen = false;
      this.guidePosition = 0;
      this.init();
    }

    loadSettings() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          return { ...defaultSettings, ...JSON.parse(stored) };
        }
      } catch (e) {
        console.error('Error loading accessibility settings:', e);
      }
      return { ...defaultSettings };
    }

    saveSettings() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
      } catch (e) {
        console.error('Error saving accessibility settings:', e);
      }
    }

    init() {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.render());
      } else {
        this.render();
      }
    }

    render() {
      // Create widget HTML
      this.createWidget();
      
      // Apply saved settings
      this.applyAllSettings();
      
      // Setup event listeners
      this.setupEventListeners();
    }

    createWidget() {
      // Create the floating button
      const button = document.createElement('button');
      button.id = 'a11y-widget-button';
      button.className = 'a11y-widget-button';
      button.setAttribute('aria-label', 'Open accessibility menu');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', 'a11y-widget-panel');
      button.innerHTML = this.getAccessibilityIcon();
      document.body.appendChild(button);

      // Create the panel
      const panel = document.createElement('div');
      panel.id = 'a11y-widget-panel';
      panel.className = 'a11y-widget-panel';
      panel.setAttribute('role', 'dialog');
      panel.setAttribute('aria-label', 'Accessibility Settings');
      panel.setAttribute('aria-modal', 'true');
      panel.style.display = 'none';
      panel.innerHTML = this.getPanelHTML();
      document.body.appendChild(panel);

      // Create reading guide line
      const guideLine = document.createElement('div');
      guideLine.id = 'a11y-reading-guide-line';
      guideLine.className = 'a11y-reading-guide-line';
      guideLine.setAttribute('aria-hidden', 'true');
      guideLine.style.display = 'none';
      document.body.appendChild(guideLine);

      // Store references
      this.button = button;
      this.panel = panel;
      this.guideLine = guideLine;
    }

    getAccessibilityIcon() {
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
      </svg>`;
    }

    getCloseIcon() {
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>`;
    }

    getPanelHTML() {
      return `
        <div class="a11y-panel-header">
          <div>
            <h2 class="a11y-panel-title">
              ${this.getAccessibilityIcon()}
              <span>Accessibility Settings</span>
            </h2>
            <p class="a11y-panel-subtitle">Customize your viewing experience</p>
          </div>
        </div>

        <div class="a11y-panel-content">
          <!-- Font Size -->
          <div class="a11y-setting-group">
            <label class="a11y-setting-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="4 7 4 4 20 4 20 7"></polyline>
                <line x1="9" y1="20" x2="15" y2="20"></line>
                <line x1="12" y1="4" x2="12" y2="20"></line>
              </svg>
              Font Size
            </label>
            <div class="a11y-button-group">
              <button class="a11y-size-btn ${this.settings.fontSize === 'normal' ? 'active' : ''}" data-size="normal">Normal</button>
              <button class="a11y-size-btn ${this.settings.fontSize === 'large' ? 'active' : ''}" data-size="large">Large</button>
              <button class="a11y-size-btn ${this.settings.fontSize === 'larger' ? 'active' : ''}" data-size="larger">Larger</button>
            </div>
          </div>

          <!-- Toggle Options -->
          ${this.createToggleOption('highContrast', 'High Contrast', 'Increase color contrast')}
          ${this.createToggleOption('textSpacing', 'Text Spacing', 'Increase letter and line spacing')}
          ${this.createToggleOption('highlightLinks', 'Highlight Links', 'Make links more visible')}
          ${this.createToggleOption('bigCursor', 'Big Cursor', 'Larger mouse pointer')}
          ${this.createToggleOption('readingGuide', 'Reading Guide', 'Line follows your cursor')}
          ${this.createToggleOption('dyslexiaFont', 'Dyslexia Font', 'Easier to read font')}
          ${this.createToggleOption('pauseAnimations', 'Pause Animations', 'Stop all moving content')}

          <!-- Reset Button -->
          <button class="a11y-reset-btn" id="a11y-reset-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="1 4 1 10 7 10"></polyline>
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
            </svg>
            Reset All Settings
          </button>
        </div>
      `;
    }

    createToggleOption(key, label, description) {
      const icons = {
        highContrast: '<circle cx="12" cy="12" r="5"></circle><path d="M12 1v6m0 6v6"></path>',
        textSpacing: '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
        highlightLinks: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
        bigCursor: '<polygon points="3 3 10 12 3 21 3 3"></polygon>',
        readingGuide: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
        dyslexiaFont: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
        pauseAnimations: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>'
      };

      return `
        <div class="a11y-toggle-option">
          <div class="a11y-toggle-info">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${icons[key]}
            </svg>
            <div>
              <label class="a11y-toggle-label" for="a11y-toggle-${key}">${label}</label>
              <p class="a11y-toggle-description">${description}</p>
            </div>
          </div>
          <button 
            id="a11y-toggle-${key}" 
            class="a11y-toggle-switch ${this.settings[key] ? 'active' : ''}"
            role="switch"
            aria-checked="${this.settings[key]}"
            data-setting="${key}"
          >
            <span class="a11y-toggle-slider"></span>
          </button>
        </div>
      `;
    }

    setupEventListeners() {
      // Toggle panel
      this.button.addEventListener('click', () => this.togglePanel());

      // Font size buttons
      const sizeButtons = this.panel.querySelectorAll('.a11y-size-btn');
      sizeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const size = e.target.dataset.size;
          this.updateSetting('fontSize', size);
          sizeButtons.forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
        });
      });

      // Toggle switches
      const toggles = this.panel.querySelectorAll('.a11y-toggle-switch');
      toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          const setting = e.currentTarget.dataset.setting;
          const newValue = !this.settings[setting];
          this.updateSetting(setting, newValue);
          e.currentTarget.classList.toggle('active', newValue);
          e.currentTarget.setAttribute('aria-checked', newValue);
        });
      });

      // Reset button
      const resetBtn = this.panel.querySelector('#a11y-reset-btn');
      resetBtn.addEventListener('click', () => this.resetSettings());

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.togglePanel();
        }
      });

      // Close on outside click
      document.addEventListener('mousedown', (e) => {
        if (this.isOpen && 
            !this.panel.contains(e.target) && 
            !this.button.contains(e.target)) {
          this.togglePanel();
        }
      });

      // Reading guide mouse tracking
      document.addEventListener('mousemove', (e) => {
        if (this.settings.readingGuide) {
          this.guidePosition = e.clientY - 20;
          this.guideLine.style.top = this.guidePosition + 'px';
        }
      });
    }

    togglePanel() {
      this.isOpen = !this.isOpen;
      
      if (this.isOpen) {
        this.panel.style.display = 'block';
        this.button.innerHTML = this.getCloseIcon();
        this.button.setAttribute('aria-label', 'Close accessibility menu');
        this.button.setAttribute('aria-expanded', 'true');
        
        // Focus first interactive element
        setTimeout(() => {
          const firstButton = this.panel.querySelector('button');
          if (firstButton) firstButton.focus();
        }, 100);
      } else {
        this.panel.style.display = 'none';
        this.button.innerHTML = this.getAccessibilityIcon();
        this.button.setAttribute('aria-label', 'Open accessibility menu');
        this.button.setAttribute('aria-expanded', 'false');
        this.button.focus();
      }
    }

    updateSetting(key, value) {
      this.settings[key] = value;
      this.saveSettings();
      this.applyAllSettings();
    }

    applyAllSettings() {
      const root = document.documentElement;

      // Font size
      root.classList.remove('a11y-font-large', 'a11y-font-larger');
      if (this.settings.fontSize === 'large') root.classList.add('a11y-font-large');
      if (this.settings.fontSize === 'larger') root.classList.add('a11y-font-larger');

      // All other settings
      root.classList.toggle('a11y-high-contrast', this.settings.highContrast);
      root.classList.toggle('a11y-text-spacing', this.settings.textSpacing);
      root.classList.toggle('a11y-highlight-links', this.settings.highlightLinks);
      root.classList.toggle('a11y-big-cursor', this.settings.bigCursor);
      root.classList.toggle('a11y-reading-guide', this.settings.readingGuide);
      root.classList.toggle('a11y-dyslexia-font', this.settings.dyslexiaFont);
      root.classList.toggle('a11y-pause-animations', this.settings.pauseAnimations);

      // Show/hide reading guide
      this.guideLine.style.display = this.settings.readingGuide ? 'block' : 'none';
    }

    resetSettings() {
      this.settings = { ...defaultSettings };
      this.saveSettings();
      this.applyAllSettings();
      
      // Update UI
      const sizeButtons = this.panel.querySelectorAll('.a11y-size-btn');
      sizeButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.size === 'normal');
      });

      const toggles = this.panel.querySelectorAll('.a11y-toggle-switch');
      toggles.forEach(toggle => {
        toggle.classList.remove('active');
        toggle.setAttribute('aria-checked', 'false');
      });
    }
  }

  // Initialize widget when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.AccessibilityWidget = new AccessibilityWidget();
    });
  } else {
    window.AccessibilityWidget = new AccessibilityWidget();
  }

})();