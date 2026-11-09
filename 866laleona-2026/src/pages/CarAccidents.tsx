import { Check, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseReviewStrip from "@/components/home/CaseReviewStrip";
import ClientReviews from "@/components/home/ClientReviews";
import FinalCta from "@/components/home/FinalCta";
import { SITE } from "@/lib/siteConfig";

const TRUST_POINTS = [
  "Free Consultation",
  "No Fees Unless We Win",
  "Hablamos Español",
];

const CarAccidents = () => (
  <div className="min-h-screen bg-white font-sans text-brand-ink">
    <Navigation />

    <main>
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black pt-16 text-white sm:pt-[68px] md:pt-28 lg:min-h-[max(100svh,720px)] lg:pt-[134px] xl:pt-[142px]">
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

        <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-6 py-10 lg:grid-cols-12 lg:py-8">
          <div className="lg:col-span-7">
            <h1 className="font-cinzel">
              <span className="eyebrow !font-sans">Brownsville Car Accident Lawyer</span>
              <span className="mt-5 block text-[2.6rem] font-black leading-[1.02] sm:text-6xl xl:text-[5.25rem]">
                Fighting for
                <span className="block text-brand-red">Your Recovery</span>
              </span>
              <span className="mt-4 block text-xl font-bold tracking-[0.12em] text-white/85 sm:text-2xl xl:text-[1.9rem]">
                After a Serious Crash
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              If a negligent driver changed your life, {SITE.attorneyName} will stand up to the insurance
              company and fight for the compensation you deserve. We handle car accidents across the Rio
              Grande Valley and beyond.
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

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:col-span-5 lg:max-w-none">
            <img
              src="/lovable-uploads/627a2a44-2e84-4325-a536-3783c23dfdee.png"
              alt="Car accident attorney Heather Harris helping a client after a crash"
              width={1000}
              height={1338}
              className="relative z-0 block h-auto max-h-[calc(100svh-160px)] w-auto max-w-full select-none object-contain lg:max-h-[calc(100svh-210px)]"
              draggable={false}
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" aria-hidden="true" />
            <div className="absolute bottom-6 left-1/2 w-max -translate-x-1/2 border-l-4 border-brand-red bg-black/80 px-5 py-3 backdrop-blur-sm lg:bottom-10 lg:left-auto lg:right-0 lg:translate-x-0">
              <p className="font-cinzel text-lg font-bold tracking-wide">Liz Valdez Garza</p>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Attorney at Law</p>
            </div>
          </div>
        </div>
      </section>

      <CaseReviewStrip />

      <section className="bg-brand-cream px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Car Accident Cases</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">
              We Help Clients Recover From <span className="text-brand-red">Serious Collisions</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Rear-End Crashes",
                text: "When a distracted or speeding driver hits you from behind, we work to secure compensation for your injuries, missed work, and recovery costs.",
              },
              {
                title: "T-Bone Accidents",
                text: "Intersection collisions often cause severe injuries. We investigate the crash thoroughly and hold the at-fault driver accountable.",
              },
              {
                title: "Multi-Vehicle Wrecks",
                text: "Complex cases often involve more than one driver and insurance policy. We untangle the details to protect your claim.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-xl border border-brand-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-brand-ink/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClientReviews />
      <FinalCta />
    </main>

    <Footer />
  </div>
);

export default CarAccidents;
