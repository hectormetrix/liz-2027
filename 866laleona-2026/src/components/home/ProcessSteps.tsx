import SectionHeading from "@/components/home/SectionHeading";

const STEPS = [
  {
    title: "Reach Out",
    text: "Call 866-LA-LEONA or send us your story through the free case review form.",
  },
  {
    title: "Free Consultation",
    text: "Liz reviews what happened and explains your options — in English or Spanish.",
  },
  {
    title: "We Fight for You",
    text: "We deal with the insurance companies so you can focus on healing and your family.",
  },
];

const ProcessSteps = () => (
  <section className="bg-white px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="How It Works"
        title={
          <>
            Getting Help Is <span className="text-brand-red">Simple</span>
          </>
        }
      />
      <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
        {/* connecting line */}
        <span className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-brand-ink/15 md:block" aria-hidden="true" />
        {STEPS.map((step, i) => (
          <li key={step.title} className="relative text-center">
            <span className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-red bg-white font-cinzel text-3xl font-black text-brand-red">
              {i + 1}
            </span>
            <h3 className="mt-7 text-xl font-bold text-brand-ink">{step.title}</h3>
            <p className="mx-auto mt-3 max-w-xs text-base leading-relaxed text-brand-ink/65">{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSteps;
