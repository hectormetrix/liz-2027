import { Heart, Languages, MapPin, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientReviews from "@/components/home/ClientReviews";
import FinalCta from "@/components/home/FinalCta";
import MeetLiz from "@/components/home/MeetLiz";
import PracticeAreasGrid from "@/components/home/PracticeAreasGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import SpanishBand from "@/components/home/SpanishBand";
import { SITE } from "@/lib/siteConfig";

const VALUES = [
  {
    icon: MapPin,
    title: "Rooted in the Rio Grande Valley",
    text: "Born and raised in the Valley, Liz understands the community she serves and the challenges local families face.",
  },
  {
    icon: Languages,
    title: "English and Spanish",
    text: "Clients can talk through their situation in the language they are most comfortable using.",
  },
  {
    icon: Heart,
    title: "Personal, Compassionate Support",
    text: "Every client deserves to be heard, treated with respect, and kept informed throughout the process.",
  },
];

const About = () => (
  <div className="min-h-screen bg-white font-sans text-brand-ink">
    <Navigation />

    <main>
      <section className="relative isolate overflow-hidden bg-black px-6 pb-20 pt-32 text-white sm:pt-36 lg:pb-28 lg:pt-48">
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

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">About the Firm</p>
            <h1 className="mt-4 font-cinzel text-4xl font-black leading-tight sm:text-6xl">
              A Valley Advocate.
              <span className="mt-2 block text-brand-red">A Voice for You.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              {SITE.attorneyName} is a personal injury attorney serving Brownsville and families across the
              Rio Grande Valley. She brings a personal commitment to every case and works to help injured
              people understand their options and move forward.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={SITE.phoneHref} className="btn-red !py-4 !text-lg">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {SITE.vanityPhone}
              </a>
              <a href="#our-values" className="btn-outline-light !py-4 !text-lg">
                What Guides Us
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div
              className="absolute -inset-3 -z-10 translate-x-5 translate-y-5 rounded-lg border-2 border-brand-red/70"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-lg bg-black">
              <img
                src="/images/liz-chair.webp"
                alt={`Attorney ${SITE.attorneyName}`}
                width={1000}
                height={1339}
                className="block w-full"
              />
            </div>
            <div className="absolute bottom-5 left-5 border-l-4 border-brand-red bg-black/85 px-5 py-3 backdrop-blur-sm">
              <p className="font-cinzel text-lg font-bold tracking-wide">{SITE.attorneyName}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Attorney at Law</p>
            </div>
          </div>
        </div>
      </section>

      <section id="our-values" className="bg-brand-cream px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">
              Here for Our <span className="text-brand-red">Community</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-ink/70">
              Liz serves clients with care, clear communication, and a commitment to stand up for people
              facing difficult circumstances.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="rounded-xl border border-brand-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-brand-ink">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-brand-ink/70">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PracticeAreasGrid />
      <ProcessSteps />
      <ClientReviews />
      <SpanishBand />
      <FinalCta />
    </main>

    <Footer />
  </div>
);

export default About;
