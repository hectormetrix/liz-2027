import { Languages, Lock, Phone, ShieldCheck, Star } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { SITE } from "@/lib/siteConfig";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "No Cost to Review Your Case",
    text: "Your consultation is free. You owe nothing to find out where you stand.",
  },
  {
    icon: Languages,
    title: "English or Español",
    text: "Talk to our office in the language you're most comfortable with.",
  },
  {
    icon: Lock,
    title: "Private & Confidential",
    text: "What you share stays between you and the firm.",
  },
];

/** Free Case Review: reasons + phone on the left, the lead form card on the right. */
const CaseReviewStrip = () => (
  <section id="case-review" className="relative isolate overflow-hidden bg-brand-cream px-6 py-24 lg:py-28">
    {/* Seal watermark */}
    <img
      src="/images/seal-red.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 top-1/2 -z-10 hidden w-[720px] -translate-y-1/2 opacity-[0.05] lg:block"
    />

    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-16">
      {/* Left: the pitch */}
      <div className="lg:col-span-5">
        <p className="eyebrow">Free Case Review</p>
        <h2 className="mt-4 text-4xl font-bold leading-[1.1] text-brand-ink sm:text-5xl">
          Tell Us <span className="text-brand-red">What Happened</span>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-brand-ink/70">
          After an accident, the insurance company starts building its case right away. Let us start
          building yours. Send your information and our office will call you back.
        </p>

        <ul className="mt-10 space-y-6">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red text-white shadow-md shadow-brand-red/30">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold tracking-wide text-brand-ink">{title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-brand-ink/65">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Client quote (from her reviews) */}
        <figure className="mt-10 border-l-4 border-brand-red pl-5">
          <div className="flex gap-0.5" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-brand-red text-brand-red" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-2 font-cinzel text-lg font-bold leading-snug text-brand-ink">
            “She represented us as if she were a part of our family.”
          </blockquote>
          <figcaption className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink/50">
            Michael Hernandez
          </figcaption>
        </figure>
      </div>

      {/* Right: the form card */}
      <div className="lg:col-span-7">
        <div className="overflow-hidden rounded-xl bg-white shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
          {/* Card header */}
          <div className="relative flex items-center gap-4 overflow-hidden bg-black px-7 py-6 text-white sm:px-9">
            <div
              className="absolute inset-0 -z-0"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 70% 140% at 100% 50%, rgba(214,26,32,0.35) 0%, rgba(0,0,0,0) 70%)",
              }}
            />
            <img src="/images/seal-red.png" alt="" aria-hidden="true" className="relative h-12 w-auto shrink-0" />
            <div className="relative">
              <h3 className="text-xl font-bold leading-tight sm:text-2xl">Request Your Free Case Review</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-white/65">
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                Free · Confidential · No obligation
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="border-t-4 border-brand-red px-7 py-8 sm:px-9 sm:py-10">
            <LeadForm formId="lead-form-home-case-review" tone="light" layout="stacked" />
          </div>

          {/* Call bar */}
          <div className="flex flex-col items-center justify-between gap-3 border-t border-brand-ink/10 bg-brand-cream/60 px-7 py-5 text-center sm:flex-row sm:px-9 sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink/60">Rather talk now?</p>
            <div className="flex flex-col items-center gap-x-6 gap-y-1 sm:flex-row">
              <a href={SITE.phoneHref} className="flex items-center gap-2 font-cinzel text-xl font-black tracking-wide text-brand-red hover:text-brand-red-dark">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SITE.vanityPhone}
              </a>
              <a href={SITE.spanishPhoneHref} className="text-[15px] font-semibold text-brand-ink/70 hover:text-brand-ink">
                Español: {SITE.spanishPhoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseReviewStrip;