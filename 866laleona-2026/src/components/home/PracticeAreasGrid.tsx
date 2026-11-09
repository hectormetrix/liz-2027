import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/home/SectionHeading";
import { PRACTICE_AREAS } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

const PracticeAreasGrid = () => (
  <section className="bg-brand-cream px-6 pb-24 pt-4">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Practice Areas"
        title={
          <>
            Hurt in an Accident? <span className="text-brand-red">We Fight for You.</span>
          </>
        }
        intro="Insurance companies have lawyers on their side from day one. You should too."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {PRACTICE_AREAS.map((area, i) => (
          <Link
            key={area.href}
            to={area.href}
            className={cn(
              "group relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden rounded-lg bg-black p-7 text-white shadow-lg",
              i < 2 ? "lg:col-span-3 lg:min-h-[380px]" : "lg:col-span-2",
              i === 4 && "md:col-span-2 lg:col-span-2"
            )}
          >
            <img
              src={area.image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/70 to-black/10" aria-hidden="true" />
            <span className="mb-4 block h-[3px] w-10 bg-brand-red transition-all duration-300 group-hover:w-20" aria-hidden="true" />
            <h3 className="text-2xl font-bold leading-tight">{area.title}</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">{area.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Learn More
              <ArrowRight className="h-4 w-4 text-brand-red transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreasGrid;
