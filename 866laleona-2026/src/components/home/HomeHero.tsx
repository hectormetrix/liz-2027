import { Check, Phone } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

const TRUST_POINTS = ["Free Consultation", "Hablamos Español", "Born & Raised in the Valley"];

/*
  Full-screen hero under a FIXED, transparent header.
  ----------------------------------------------------
  The header (Navigation.tsx) is position: fixed and floats over the top of this section,
  so the hero is exactly 100% of the screen tall and its top padding equals the header height.
  The content is then centered top-to-bottom in the space left below the header.

  Header heights (utility bar h-11 = 44px shows from md up):
    • mobile  ≈ 64px          → pt-16
    • sm      ≈ 68px          → pt-[68px]
    • md      ≈ 44 + 68       → pt-28 (112px)
    • lg      ≈ 44 + 90       → pt-[134px]
    • xl      ≈ 44 + 98       → pt-[142px]
*/

const HomeHero = () => (
  <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black pt-16 text-white sm:pt-[68px] md:pt-28 lg:min-h-[max(100svh,720px)] lg:pt-[134px] xl:pt-[142px]">
    {/* Background: red glow + seal watermark */}
    <div
      className="absolute inset-0 -z-10"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 60% 70% at 78% 50%, rgba(214,26,32,0.28) 0%, rgba(214,26,32,0.08) 40%, rgba(0,0,0,0) 70%)",
      }}
    />
    <img
      src="/images/seal-white.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 top-1/2 -z-10 hidden w-[760px] -translate-y-1/2 opacity-[0.035] lg:block"
    />

    {/* Everything below the header: fills the rest of the screen, content centered up and down */}
    <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-6 py-10 lg:grid-cols-12 lg:py-8">
      {/* Copy */}
      <div className="animate-fade-up lg:col-span-7">
        <h1 className="font-cinzel">
          <span className="eyebrow !font-sans">Brownsville Personal Injury Attorney</span>
          <span className="mt-5 block text-[2.6rem] font-black leading-[1.02] sm:text-6xl xl:text-[5.25rem]">
            Protecting
            <span className="block text-brand-red">Your Rights</span>
          </span>
          <span className="mt-4 block text-xl font-bold tracking-[0.12em] text-white/85 sm:text-2xl xl:text-[1.9rem]">
            Every Step of the Way
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
          When an accident turns your life upside down, {SITE.attorneyName} — La Leona del Valle —
          fights for the compensation you and your family deserve. Car, truck, workplace and oil field
          injuries across the Rio Grande Valley.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href={SITE.phoneHref} className="btn-red !py-4 !text-lg">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {SITE.vanityPhone}
          </a>
          <a href="#case-review" className="btn-outline-light !py-4 !text-lg">
            Free Case Review
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
          {TRUST_POINTS.map((point) => (
            <li key={point} className="flex items-center gap-2 text-[15px] font-semibold text-white/85">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red/20">
                <Check className="h-3.5 w-3.5 text-brand-red" strokeWidth={3} aria-hidden="true" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Photo — capped to the space under the header so it never runs into the menu */}
      <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:col-span-5 lg:max-w-none">
        <img
          src="/lovable-uploads/liz-26-update-1.png"
          alt={`Attorney ${SITE.attorneyName} in her Brownsville office`}
          width={1000}
          height={1338}
          className="relative z-0 block h-auto max-h-[calc(100svh-160px)] w-auto max-w-full select-none object-contain lg:max-h-[calc(100svh-210px)]"
          draggable={false}
        />
        {/* Soften the bottom edge of the photo */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" aria-hidden="true" />
        <div className="absolute bottom-6 left-1/2 w-max -translate-x-1/2 border-l-4 border-brand-red bg-black/80 px-5 py-3 backdrop-blur-sm lg:bottom-10 lg:left-auto lg:right-0 lg:translate-x-0">
          <p className="font-cinzel text-lg font-bold tracking-wide">{SITE.attorneyName}</p>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Attorney at Law</p>
        </div>
      </div>
    </div>
  </section>
);

export default HomeHero;