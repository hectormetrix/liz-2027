import { Link } from "react-router-dom";
import { Heart, Languages, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

const PILLARS = [
  {
    icon: MapPin,
    title: "Born & Raised in the Valley",
    text: "Liz understands the challenges families in the Rio Grande Valley face — because this is home.",
  },
  {
    icon: Languages,
    title: "English & Español",
    text: "Bilingual representation, so every client is heard and understood.",
  },
  {
    icon: Heart,
    title: "Treated Like Family",
    text: "A personal approach to every case, with compassionate support and an aggressive pursuit of justice.",
  },
];

const MeetLiz = () => (
  <section className="relative isolate overflow-hidden bg-black px-6 py-24 text-white lg:py-32">
    <div
      className="absolute inset-0 -z-10"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 50% 60% at 22% 50%, rgba(214,26,32,0.22) 0%, rgba(0,0,0,0) 70%)",
      }}
    />
    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="absolute -inset-3 -z-10 translate-x-5 translate-y-5 rounded-lg border-2 border-brand-red/70" aria-hidden="true" />
        <div className="overflow-hidden rounded-lg bg-black">
          <img
            src="/images/liz-chair.webp"
            alt={`Attorney ${SITE.attorneyName}`}
            width={1000}
            height={1339}
            loading="lazy"
            className="block w-full"
          />
        </div>
      </div>

      <div>
        <p className="eyebrow">Meet Your Attorney</p>
        <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{SITE.attorneyName}</h2>
        <p className="mt-2 font-cinzel text-xl font-bold tracking-[0.12em] text-brand-red">La Leona del Valle</p>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/75">
          <p>
            Liz Valdez Garza is a dedicated personal injury attorney serving the Brownsville community with
            passion and commitment. She has built a reputation as a fierce advocate who never backs down
            from a challenge.
          </p>
          <p>
            She handles auto accidents, workplace injuries, truck accidents and all types of personal injury
            cases — working tirelessly so her clients receive the compensation they deserve.
          </p>
        </div>

        <ul className="mt-10 space-y-6">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brand-red/40 bg-brand-red/10">
                <Icon className="h-5 w-5 text-brand-red" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-white/65">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-11 flex flex-col gap-4 sm:flex-row">
          <Link to="/about" className="btn-outline-light">
            More About Liz
          </Link>
          <a href={SITE.phoneHref} className="btn-red">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Talk to Liz
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MeetLiz;
