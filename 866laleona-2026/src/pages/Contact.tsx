import { Mail, MapPin, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseReviewStrip from "@/components/home/CaseReviewStrip";
import ClientReviews from "@/components/home/ClientReviews";
import SpanishBand from "@/components/home/SpanishBand";
import { SITE } from "@/lib/siteConfig";

const Contact = () => (
  <div className="min-h-screen bg-white font-sans text-brand-ink">
    <Navigation />

    <main>
      <section className="relative isolate overflow-hidden bg-black px-6 pb-20 pt-32 text-white sm:pt-36 lg:pb-24 lg:pt-48">
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

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow">Contact Our Office</p>
            <h1 className="mt-4 font-cinzel text-4xl font-black leading-tight sm:text-6xl">
              Let’s Talk About
              <span className="mt-2 block text-brand-red">What Happened</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
              Reach out to our Brownsville office for a free case review. Call us directly or send your
              information through the secure form below.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            <li className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <Phone className="h-6 w-6 text-brand-red" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-white/55">Call Us</h2>
              <a href={SITE.phoneHref} className="mt-2 block font-cinzel text-2xl font-black text-white hover:text-brand-red">
                {SITE.vanityPhone}
              </a>
              <p className="mt-1 text-sm text-white/60">{SITE.phoneDisplay}</p>
            </li>
            <li className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <Mail className="h-6 w-6 text-brand-red" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-white/55">Email</h2>
              <a href={SITE.emailHref} className="mt-2 block break-all text-lg font-semibold text-white hover:text-brand-red">
                {SITE.email}
              </a>
              <p className="mt-1 text-sm text-white/60">We look forward to hearing from you.</p>
            </li>
            <li className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <MapPin className="h-6 w-6 text-brand-red" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-white/55">Visit</h2>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-semibold text-white hover:text-brand-red"
              >
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </a>
              <p className="mt-1 text-sm text-white/60">Brownsville, Texas</p>
            </li>
          </ul>
        </div>
      </section>

      <CaseReviewStrip />
      <ClientReviews />
      <SpanishBand />
    </main>

    <Footer />
  </div>
);

export default Contact;
