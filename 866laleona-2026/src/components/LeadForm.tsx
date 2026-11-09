import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Phone } from "lucide-react";
import { SITE } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

/**
 * Two-step Free Case Review form (used everywhere a lead form appears).
 *
 * Step 1 — four tap questions: case type, when it happened, police report, insurance contacted.
 *          Every question has a "Not sure" answer so nobody gets stuck.
 * Step 2 — contact info + what happened, then submit.
 *
 * Posts JSON to /api/submit-form.php.
 *   Fields the LIVE backend already saves (leads table):
 *     firstName, lastName, phone (required) · email, caseDescription, pageUrl
 *   New fields for the CRM follow-ups (the live backend ignores them until the new
 *   DB columns are added — nothing breaks in the meantime):
 *     language            en | es
 *     caseType            car | truck | workplace | commercial | oilfield | other
 *     incidentTimeframe   week | month | 1-6mo | 6-12mo | 1yr+ | unsure
 *     policeReport        yes | no | unsure
 *     insuranceContacted  yes | no | unsure
 * The endpoint answers {"status":"success"} or {"status":"error","message":"..."}.
 */

type Lang = "en" | "es";
type Option = { value: string; en: string; es: string };

const CASE_TYPES: Option[] = [
  { value: "car", en: "Car", es: "Carro" },
  { value: "truck", en: "Truck / 18-Wheeler", es: "Tráiler / Troca" },
  { value: "workplace", en: "Workplace", es: "Trabajo" },
  { value: "commercial", en: "Commercial Vehicle", es: "Vehículo Comercial" },
  { value: "oilfield", en: "Oil Field", es: "Campo Petrolero" },
  { value: "other", en: "Other / Not sure", es: "Otro / No sé" },
];

const TIMEFRAMES: Option[] = [
  { value: "week", en: "This week", es: "Esta semana" },
  { value: "month", en: "This month", es: "Este mes" },
  { value: "1-6mo", en: "1–6 months ago", es: "Hace 1–6 meses" },
  { value: "6-12mo", en: "6–12 months ago", es: "Hace 6–12 meses" },
  { value: "1yr+", en: "Over a year ago", es: "Hace más de un año" },
  { value: "unsure", en: "Not sure", es: "No sé" },
];

const YES_NO_UNSURE: Option[] = [
  { value: "yes", en: "Yes", es: "Sí" },
  { value: "no", en: "No", es: "No" },
  { value: "unsure", en: "Not sure", es: "No sé" },
];

// Practice page URL → pre-selected case type
const CASE_TYPE_BY_PATH: Record<string, string> = {
  "/personal-injury/car-accidents": "car",
  "/personal-injury/truck-accidents": "truck",
  "/personal-injury/workplace-injuries": "workplace",
  "/personal-injury/commercial-vehicle-accidents": "commercial",
  "/personal-injury/oil-field-accidents": "oilfield",
};

const T = {
  en: {
    step: "Step",
    of: "of",
    q1: "What type of case?",
    q2: "When did it happen?",
    q3: "Was a police report made?",
    q4: "Has an insurance company contacted you?",
    continue: "Continue",
    answerAll: "Tap an answer for each question to continue.",
    back: "Back",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone",
    email: "Email",
    whatHappened: "What happened?",
    whatHappenedPh: "Briefly describe your accident or injury",
    submit: "Get My Free Case Review",
    sending: "Sending…",
    disclaimer: "Free and confidential. Submitting this form does not create an attorney-client relationship.",
    thanksTitle: "Thank You",
    thanksText: "Your case review request was received. Our office will contact you shortly. If it's urgent, call us now.",
    call: "Call",
    errGeneric: `Something went wrong. Please call us at ${SITE.vanityPhone}.`,
    errNetwork: `We couldn't send your request. Please call us at ${SITE.vanityPhone}.`,
    errRequired: "Please complete all required fields before submitting.",
    consentComms:
      "I agree to receive communications from Valdez Garza Law Firm, P.C., including phone calls, text messages, and emails, regarding my inquiry.",
    consentNoRelationship: "I understand that submitting this form does not create an attorney-client relationship.",
  },
  es: {
    step: "Paso",
    of: "de",
    q1: "¿Qué tipo de caso?",
    q2: "¿Cuándo pasó?",
    q3: "¿Se hizo un reporte de policía?",
    q4: "¿Lo ha contactado una compañía de aseguranza?",
    continue: "Continuar",
    answerAll: "Escoja una respuesta para cada pregunta para continuar.",
    back: "Atrás",
    firstName: "Nombre",
    lastName: "Apellido",
    phone: "Teléfono",
    email: "Correo electrónico",
    whatHappened: "¿Qué pasó?",
    whatHappenedPh: "Describa brevemente su accidente o lesión",
    submit: "Revisión Gratis de Mi Caso",
    sending: "Enviando…",
    disclaimer: "Gratis y confidencial. Enviar este formulario no crea una relación de abogado y cliente.",
    thanksTitle: "Gracias",
    thanksText: "Recibimos su solicitud. Nuestra oficina se comunicará con usted muy pronto. Si es urgente, llámenos ahora.",
    call: "Llame al",
    errGeneric: `Algo salió mal. Por favor llámenos al ${SITE.vanityPhone}.`,
    errNetwork: `No pudimos enviar su solicitud. Por favor llámenos al ${SITE.vanityPhone}.`,
    errRequired: "Por favor complete todos los campos requeridos antes de enviar.",
    consentComms:
      "Acepto recibir comunicaciones de Valdez Garza Law Firm, P.C., incluyendo llamadas, mensajes de texto y correos electrónicos, sobre mi consulta.",
    consentNoRelationship: "Entiendo que enviar este formulario no crea una relación de abogado y cliente.",
  },
} as const;

type LeadFormProps = {
  /** Unique id per placement (e.g. "lead-form-home-case-review") */
  formId: string;
  /** "dark" for black sections, "light" for white/cream sections */
  tone?: "dark" | "light";
  /** Kept for compatibility with existing placements; the form is always stacked now. */
  layout?: "stacked" | "wide";
  /** Force a case type (otherwise taken from the practice page URL, if any) */
  defaultCaseType?: string;
  className?: string;
};

type Contact = { firstName: string; lastName: string; phone: string; email: string; caseDescription: string };
type Answers = { caseType: string; incidentTimeframe: string; policeReport: string; insuranceContacted: string };
type Consent = { communications: boolean; noAttorneyClientRelationship: boolean };

const EMPTY_CONTACT: Contact = { firstName: "", lastName: "", phone: "", email: "", caseDescription: "" };
const EMPTY_CONSENT: Consent = { communications: false, noAttorneyClientRelationship: false };

type ChipGroupProps = {
  formId: string;
  name: keyof Answers;
  question: string;
  options: Option[];
  value: string;
  lang: Lang;
  dark: boolean;
  legendClass: string;
  onPick: (name: keyof Answers, value: string) => void;
};

/** One tap-question: real radio inputs styled as chips (keyboard and screen-reader friendly). */
const ChipGroup = ({ formId, name, question, options, value, lang, dark, legendClass, onPick }: ChipGroupProps) => (
  <fieldset>
    <legend className={legendClass}>{question}</legend>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const id = `${formId}-${name}-${opt.value}`;
        const checked = value === opt.value;
        return (
          <label
            key={opt.value}
            htmlFor={id}
            className={cn(
              "cursor-pointer select-none rounded-full border px-4 py-2.5 text-[15px] font-semibold transition-all",
              "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-red/50",
              checked
                ? "border-brand-red bg-brand-red text-white shadow-md shadow-brand-red/25"
                : dark
                  ? "border-white/20 bg-white/[0.04] text-white/85 hover:border-white/50"
                  : "border-brand-ink/15 bg-white text-brand-ink/80 hover:border-brand-ink/40"
            )}
          >
            <input
              id={id}
              type="radio"
              name={`${formId}-${name}`}
              value={opt.value}
              checked={checked}
              onChange={() => onPick(name, opt.value)}
              className="sr-only"
            />
            {opt[lang]}
          </label>
        );
      })}
    </div>
  </fieldset>
);

const LeadForm = ({ formId, tone = "dark", defaultCaseType, className }: LeadFormProps) => {
  const location = useLocation();
  const pathCaseType = CASE_TYPE_BY_PATH[location.pathname.replace(/\/$/, "")] ?? "";

  const emptyAnswers = useMemo<Answers>(
    () => ({ caseType: defaultCaseType ?? pathCaseType, incidentTimeframe: "", policeReport: "", insuranceContacted: "" }),
    [defaultCaseType, pathCaseType]
  );

  const [lang, setLang] = useState<Lang>("en");
  const [step, setStep] = useState<1 | 2>(1);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [consents, setConsents] = useState<Consent>(EMPTY_CONSENT);
  const [honeypot, setHoneypot] = useState("");
  const [showStep1Hint, setShowStep1Hint] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // If the visitor navigates to another practice page, re-seed the case type
  useEffect(() => {
    setAnswers((a) => (a.caseType ? a : { ...a, caseType: emptyAnswers.caseType }));
  }, [emptyAnswers.caseType]);

  const t = T[lang];
  const dark = tone === "dark";
  const step1Done = Boolean(answers.caseType && answers.incidentTimeframe && answers.policeReport && answers.insuranceContacted);

  const setAnswer = (key: keyof Answers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setShowStep1Hint(false);
  };

  const updateContact = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setContact((c) => ({ ...c, [e.target.name]: e.target.value }));

  const goToStep2 = () => {
    if (!step1Done) {
      setShowStep1Hint(true);
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      goToStep2();
      return;
    }

    // Bots fill hidden fields; people never see this one. Pretend it worked and send nothing.
    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!contact.email.trim() || !consents.communications || !consents.noAttorneyClientRelationship) {
      setStatus("error");
      setErrorMsg(t.errRequired);
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit-form.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // existing fields (saved today)
          firstName: contact.firstName.trim(),
          lastName: contact.lastName.trim(),
          phone: contact.phone.trim(),
          email: contact.email.trim(),
          caseDescription: contact.caseDescription.trim(),
          pageUrl: window.location.href,
          // CRM fields (saved once the new DB columns are added)
          language: lang,
          caseType: answers.caseType,
          incidentTimeframe: answers.incidentTimeframe,
          policeReport: answers.policeReport,
          insuranceContacted: answers.insuranceContacted,
          consentToCommunications: consents.communications,
          noAttorneyClientRelationship: consents.noAttorneyClientRelationship,
        }),
      });

      const data = await res.json().catch(() => null);

      if (data && data.status === "success") {
        setStatus("success");
        setContact(EMPTY_CONTACT);
        setConsents(EMPTY_CONSENT);
        setAnswers(emptyAnswers);
        setStep(1);
      } else {
        setStatus("error");
        setErrorMsg((data && data.message) || t.errGeneric);
      }
    } catch {
      setStatus("error");
      setErrorMsg(t.errNetwork);
    }
  };

  // ---------- styles ----------
  const muted = dark ? "text-white/60" : "text-brand-ink/60";
  const legend = cn("mb-3 block text-[13px] font-bold uppercase tracking-[0.14em]", dark ? "text-white/85" : "text-brand-ink/85");
  const label = cn("mb-1.5 block text-xs font-bold uppercase tracking-[0.14em]", dark ? "text-white/80" : "text-brand-ink/80");
  const field = cn(
    "block w-full rounded-md border px-4 py-3 text-base outline-none transition-colors",
    "focus:border-brand-red focus:ring-2 focus:ring-brand-red/30",
    dark
      ? "border-white/15 bg-white/[0.06] text-white placeholder:text-white/40"
      : "border-brand-ink/15 bg-white text-brand-ink placeholder:text-brand-ink/40"
  );

  // ---------- success ----------
  if (status === "success") {
    return (
      <div
        className={cn("flex flex-col items-center rounded-lg px-6 py-10 text-center", dark ? "bg-white/[0.04] text-white" : "bg-white text-brand-ink", className)}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="h-12 w-12 text-brand-red" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-bold">{t.thanksTitle}</h3>
        <p className={cn("mt-2 max-w-sm text-base", dark ? "text-white/75" : "text-brand-ink/70")}>{t.thanksText}</p>
        <a href={SITE.phoneHref} className="btn-red mt-6">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {t.call} {SITE.vanityPhone}
        </a>
      </div>
    );
  }

  // ---------- form ----------
  return (
    <form id={formId} onSubmit={handleSubmit} className={cn("relative w-full", className)} lang={lang}>
      {/* Honeypot (hidden from people and screen readers) */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Top row: progress + language switch */}
      <div className="mb-7 flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className={cn("text-xs font-bold uppercase tracking-[0.18em]", muted)}>
            {t.step} {step} {t.of} 2
          </p>
          <div className={cn("mt-2 h-1.5 w-full max-w-[220px] overflow-hidden rounded-full", dark ? "bg-white/10" : "bg-brand-ink/10")}>
            <div className="h-full rounded-full bg-brand-red transition-all duration-500" style={{ width: step === 1 ? "50%" : "100%" }} />
          </div>
        </div>
        <div
          className={cn("inline-flex shrink-0 rounded-full border p-1", dark ? "border-white/15" : "border-brand-ink/15")}
          role="group"
          aria-label="Language / Idioma"
        >
          {(["en", "es"] as Lang[]).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] transition-colors",
                lang === code ? "bg-brand-red text-white" : dark ? "text-white/70 hover:text-white" : "text-brand-ink/60 hover:text-brand-ink"
              )}
            >
              {code === "en" ? "English" : "Español"}
            </button>
          ))}
        </div>
      </div>

      {step === 1 ? (
        <div className="space-y-7">
          <ChipGroup formId={formId} lang={lang} dark={dark} legendClass={legend} onPick={setAnswer} name="caseType" question={t.q1} options={CASE_TYPES} value={answers.caseType} />
          <ChipGroup formId={formId} lang={lang} dark={dark} legendClass={legend} onPick={setAnswer} name="incidentTimeframe" question={t.q2} options={TIMEFRAMES} value={answers.incidentTimeframe} />
          <div className="grid gap-7 sm:grid-cols-2">
            <ChipGroup formId={formId} lang={lang} dark={dark} legendClass={legend} onPick={setAnswer} name="policeReport" question={t.q3} options={YES_NO_UNSURE} value={answers.policeReport} />
            <ChipGroup formId={formId} lang={lang} dark={dark} legendClass={legend} onPick={setAnswer} name="insuranceContacted" question={t.q4} options={YES_NO_UNSURE} value={answers.insuranceContacted} />
          </div>

          {showStep1Hint && (
            <p className="text-sm font-semibold text-brand-red" role="alert">
              {t.answerAll}
            </p>
          )}

          <button type="submit" className={cn("btn-red w-full", !step1Done && "opacity-80")}>
            {t.continue}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      ) : (
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${formId}-firstName`} className={label}>
                {t.firstName} <span className="text-brand-red">*</span>
              </label>
              <input id={`${formId}-firstName`} name="firstName" autoComplete="given-name" required value={contact.firstName} onChange={updateContact} className={field} autoFocus />
            </div>
            <div>
              <label htmlFor={`${formId}-lastName`} className={label}>
                {t.lastName} <span className="text-brand-red">*</span>
              </label>
              <input id={`${formId}-lastName`} name="lastName" autoComplete="family-name" required value={contact.lastName} onChange={updateContact} className={field} />
            </div>
            <div>
              <label htmlFor={`${formId}-phone`} className={label}>
                {t.phone} <span className="text-brand-red">*</span>
              </label>
              <input id={`${formId}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" required value={contact.phone} onChange={updateContact} className={field} />
            </div>
            <div>
              <label htmlFor={`${formId}-email`} className={label}>
                {t.email} <span className="text-brand-red">*</span>
              </label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={contact.email}
                onChange={updateContact}
                className={field}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={`${formId}-caseDescription`} className={label}>
                {t.whatHappened}
              </label>
              <textarea
                id={`${formId}-caseDescription`}
                name="caseDescription"
                rows={3}
                value={contact.caseDescription}
                onChange={updateContact}
                className={cn(field, "resize-none")}
                placeholder={t.whatHappenedPh}
              />
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <label className={cn("flex items-start gap-3 text-sm leading-relaxed", dark ? "text-white/80" : "text-brand-ink/80")}>
              <input
                type="checkbox"
                required
                checked={consents.communications}
                onChange={(e) => setConsents((c) => ({ ...c, communications: e.target.checked }))}
                className="mt-1 h-4 w-4 accent-brand-red"
              />
              <span>{t.consentComms}</span>
            </label>

            <label className={cn("flex items-start gap-3 text-sm leading-relaxed", dark ? "text-white/80" : "text-brand-ink/80")}>
              <input
                type="checkbox"
                required
                checked={consents.noAttorneyClientRelationship}
                onChange={(e) => setConsents((c) => ({ ...c, noAttorneyClientRelationship: e.target.checked }))}
                className="mt-1 h-4 w-4 accent-brand-red"
              />
              <span>{t.consentNoRelationship}</span>
            </label>
          </div>

          {status === "error" && (
            <p className="mt-4 rounded-md border border-brand-red/40 bg-brand-red/10 px-4 py-3 text-sm font-semibold text-brand-red" role="alert">
              {errorMsg}
            </p>
          )}

          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setStep(1)}
              className={cn("inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-wider", dark ? "text-white/70 hover:text-white" : "text-brand-ink/60 hover:text-brand-ink")}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {t.back}
            </button>
            <button type="submit" className="btn-red w-full sm:flex-1" disabled={status === "sending"}>
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  {t.sending}
                </>
              ) : (
                t.submit
              )}
            </button>
          </div>
        </div>
      )}

      <p className={cn("mt-5 text-xs leading-relaxed", dark ? "text-white/50" : "text-brand-ink/55")}>{t.disclaimer}</p>
    </form>
  );
};

export default LeadForm;