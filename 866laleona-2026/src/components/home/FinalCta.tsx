import { Mail, MapPin, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { SITE } from "@/lib/siteConfig";

const FinalCta = () => (
  <section className="relative isolate overflow-hidden bg-black px-6 py-24 text-white">
    <img
      src="/images/seal-white.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute -left-24 bottom-0 -z-10 w-[560px] opacity-[0.03]"
    />
    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="eyebrow">Don't Wait</p>
        <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          Don't Face the Insurance Company <span className="text-brand-red">Alone</span>
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
          The sooner you call, the sooner we can protect your claim. Your consultation is free.
        </p>

        <a href={SITE.phoneHref} className="group mt-10 inline-block">
          <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Call Now</span>
          <span className="mt-1 block font-cinzel text-5xl font-black tracking-wide text-brand-red transition-colors group-hover:text-white sm:text-6xl">
            {SITE.vanityPhone}
          </span>
          <span className="mt-1 block text-lg text-white/60">{SITE.phoneDisplay}</span>
        </a>

        <ul className="mt-10 space-y-4 border-t border-white/10 pt-8 text-[15px] text-white/70">
          <li>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </a>
          </li>
          <li>
            <a href={SITE.spanishPhoneHref} className="flex items-start gap-3 hover:text-white">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              Si Habla Español: {SITE.spanishPhoneDisplay}
            </a>
          </li>
          <li>
            <a href={SITE.emailHref} className="flex items-start gap-3 hover:text-white">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              {SITE.email}
            </a>
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-white/10 bg-brand-charcoal p-7 sm:p-10">
        <h3 className="text-2xl font-bold">Request Your Free Case Review</h3>
        <p className="mt-2 text-[15px] text-white/60">We'll get back to you quickly.</p>
        <LeadForm formId="lead-form-home-footer" tone="dark" layout="stacked" className="mt-7" />
      </div>
    </div>
  </section>
);

export default FinalCta;
