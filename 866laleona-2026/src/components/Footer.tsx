import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { NAV_LINKS, PRACTICE_AREAS, SITE } from "@/lib/siteConfig";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  const heading = "mb-5 font-cinzel text-sm font-bold uppercase tracking-[0.2em] text-white";
  const link = "text-[15px] text-white/65 transition-colors hover:text-white";

  return (
    <footer className="relative overflow-hidden border-t-4 border-brand-red bg-black font-sans text-white">
      {/* Seal watermark */}
      <img
        src="/images/seal-white.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-10 w-[520px] opacity-[0.03]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label={`${SITE.firmName} — home`} className="inline-block">
              <BrandLogo layout="vertical" sizeClassName="text-[17px]" sealClassName="h-28" />
            </Link>
            <div className="mt-8 flex gap-3">
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={SITE.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white">
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className={heading}>Practice Areas</h2>
            <ul className="space-y-3">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.href}>
                  <Link to={area.href} className={link}>
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className={heading}>The Firm</h2>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className={heading}>Contact</h2>
            <ul className="space-y-4">
              <li>
                <a href={SITE.phoneHref} className="flex items-start gap-3 text-white">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                  <span>
                    <span className="block font-cinzel text-lg font-black tracking-wide text-brand-red">{SITE.vanityPhone}</span>
                    <span className="text-[15px] text-white/65">{SITE.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={SITE.spanishPhoneHref} className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                  <span className="text-[15px] text-white/65 hover:text-white">
                    <span className="block font-semibold text-white">Si Habla Español</span>
                    {SITE.spanishPhoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                  <span className="break-all text-[15px] text-white/65 hover:text-white">{SITE.email}</span>
                </a>
              </li>
              <li>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                  <span className="text-[15px] text-white/65 hover:text-white">
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-[13px] leading-relaxed text-white/45">
          <p>
            The information on this website is for general information only and is not legal advice.
            Contacting the firm does not create an attorney-client relationship.
          </p>
          <p className="mt-3">
            © {year} {SITE.firmName} · Personal Injury Attorney Brownsville, TX · La Leona del Valle, Attorney {SITE.attorneyName}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
