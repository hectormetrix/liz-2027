import { cn } from "@/lib/utils";
import { SITE } from "@/lib/siteConfig";

type BrandLogoProps = {
  /** horizontal: seal left, text right (header). vertical: seal on top, text centered (footer, hero badges). */
  layout?: "horizontal" | "vertical";
  /**
   * Base type size. Every line scales from it in the same ratios as the approved logo:
   * name 1em · practice line 0.57em · 866-LA-LEONA 1.65em.
   * Pass Tailwind text-size classes (responsive is fine), e.g. "text-[13px] lg:text-[22px]".
   */
  sizeClassName?: string;
  /** Seal height classes, e.g. "h-14 lg:h-[76px]" */
  sealClassName?: string;
  /** Hide the practice-area line (used on the smallest screens) */
  hidePracticeOnMobile?: boolean;
  /** "dark" = white text for black backgrounds, "light" = near-black text for white backgrounds */
  tone?: "dark" | "light";
  className?: string;
};

/**
 * The Valdez Garza Law Firm lockup, built from live text (Cinzel) + the red seal image.
 * Live text stays sharp at any size and is readable by search engines and AI crawlers.
 */
const BrandLogo = ({
  layout = "horizontal",
  sizeClassName = "text-[22px]",
  sealClassName = "h-[76px]",
  hidePracticeOnMobile = false,
  tone = "dark",
  className,
}: BrandLogoProps) => {
  const ink = tone === "dark" ? "text-white" : "text-brand-ink";
  const rule = tone === "dark" ? "bg-white/70" : "bg-brand-ink/60";

  const textBlock = (
    <span
      className={cn(
        "inline-flex flex-col items-stretch font-cinzel leading-none",
        layout === "vertical" && "items-center",
        sizeClassName,
        ink
      )}
    >
      <span className="whitespace-nowrap text-center font-extrabold tracking-[0.04em]" style={{ fontSize: "1em" }}>
        {SITE.firmName.toUpperCase()}
      </span>
      <span
        className={cn(
          "items-center gap-[0.6em]",
          hidePracticeOnMobile ? "hidden sm:flex" : "flex"
        )}
        style={{ marginTop: "0.42em", fontSize: "0.57em" }}
      >
        <span className={cn("h-px flex-1", rule)} aria-hidden="true" />
        <span className="whitespace-nowrap font-bold tracking-[0.16em]">
          {SITE.practiceLine.toUpperCase()}
        </span>
        <span className={cn("h-px flex-1", rule)} aria-hidden="true" />
      </span>
      <span
        className="whitespace-nowrap text-center font-black tracking-[0.04em] text-brand-red"
        style={{ marginTop: "0.3em", fontSize: "1.65em" }}
      >
        {SITE.vanityPhone}
      </span>
    </span>
  );

  const seal = (
    <img
      src="/images/seal-red.png"
      alt=""
      aria-hidden="true"
      width={640}
      height={599}
      className={cn("w-auto shrink-0 select-none", sealClassName)}
      draggable={false}
    />
  );

  if (layout === "vertical") {
    return (
      <span className={cn("inline-flex flex-col items-center gap-4", className)}>
        {seal}
        {textBlock}
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-3 sm:gap-5", className)}>
      {seal}
      <span className="my-1 hidden w-[2px] self-stretch bg-brand-red sm:block" aria-hidden="true" />
      {textBlock}
    </span>
  );
};

export default BrandLogo;
