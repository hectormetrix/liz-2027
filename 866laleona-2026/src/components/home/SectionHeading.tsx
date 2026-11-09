import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

/** Eyebrow + Cinzel heading + optional intro, used at the top of every home section. */
const SectionHeading = ({ eyebrow, title, intro, tone = "light", align = "center", className }: SectionHeadingProps) => (
  <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
    <p className={cn("eyebrow", align === "center" && "justify-center")}>{eyebrow}</p>
    <h2
      className={cn(
        "mt-4 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
        tone === "dark" ? "text-white" : "text-brand-ink"
      )}
    >
      {title}
    </h2>
    {intro && (
      <p className={cn("mt-5 text-lg leading-relaxed", tone === "dark" ? "text-white/70" : "text-brand-ink/70")}>
        {intro}
      </p>
    )}
  </div>
);

export default SectionHeading;
