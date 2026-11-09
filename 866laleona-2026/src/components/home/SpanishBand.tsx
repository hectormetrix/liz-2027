import { Phone } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

const SpanishBand = () => (
  <section lang="es" className="relative isolate overflow-hidden bg-brand-red px-6 py-16 text-white">
    <div
      className="absolute inset-0 -z-10 opacity-60"
      aria-hidden="true"
      style={{ background: "linear-gradient(115deg, #6E0D11 0%, rgba(110,13,17,0) 55%)" }}
    />
    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
      <div>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">¿Lesionado en un Accidente?</h2>
        <p className="mt-3 max-w-2xl text-lg text-white/90">
          Hablamos Español. Consulta gratis — llame hoy y hable con nuestra oficina en español.
        </p>
      </div>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <a
          href={SITE.spanishPhoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-4 text-base font-bold uppercase tracking-wider text-brand-red shadow-lg transition-colors hover:bg-black hover:text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {SITE.spanishPhoneDisplay}
        </a>
        <a href={SITE.phoneHref} className="btn-outline-light !py-4">
          {SITE.vanityPhone}
        </a>
      </div>
    </div>
  </section>
);

export default SpanishBand;
