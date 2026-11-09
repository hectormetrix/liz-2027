import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, MapPin, Menu, Phone } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import BrandLogo from "@/components/BrandLogo";
import { NAV_LINKS, PRACTICE_AREAS, SITE } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;
  const practiceActive = location.pathname.startsWith("/personal-injury");

  const linkClass = (active: boolean) =>
    cn(
      "relative px-1 py-2 text-[13px] font-bold uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-white",
      "after:absolute after:inset-x-1 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-brand-red after:transition-transform hover:after:scale-x-100",
      active && "text-white after:scale-x-100"
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div className="hidden border-b border-white/10 bg-gradient-to-r from-[#1f0c0d] via-brand-red-deep to-[#15090b] text-white md:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6 text-[11px] font-bold uppercase tracking-[0.18em]">
          <p className="flex items-center gap-4 text-white/90">
            <span>Free Consultation</span>
            <span className="h-3 w-px bg-white/30" aria-hidden="true" />
            <span>Hablamos Español</span>
          </p>
          <div className="flex items-center gap-5 text-white/80">
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state}
            </a>
            <a href={SITE.spanishPhoneHref} className="transition-colors hover:text-white">
              Español: {SITE.spanishPhoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "border-b text-white transition-all duration-300",
          isScrolled ? "border-white/10 bg-black/95 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md" : "border-transparent bg-transparent"
        )}
        aria-label="Main"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
          <Link to="/" aria-label={`${SITE.firmName} — home`} className="shrink-0 !font-cinzel">
            <BrandLogo
              layout="horizontal"
              sizeClassName="text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px]"
              sealClassName="h-10 sm:h-11 lg:h-14"
              hidePracticeOnMobile
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 lg:flex lg:gap-8">
            <Link to="/" className={linkClass(isActive("/"))}>
              Home
            </Link>

            <div className="group relative">
              <button
                type="button"
                className={cn(linkClass(practiceActive), "flex items-center gap-1")}
                aria-haspopup="true"
              >
                Practice Areas
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="overflow-hidden rounded-md border border-white/10 bg-brand-charcoal py-2 shadow-2xl">
                  {PRACTICE_AREAS.map((area) => (
                    <li key={area.href}>
                      <Link
                        to={area.href}
                        className={cn(
                          "block border-l-2 border-transparent px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:border-brand-red hover:bg-white/5 hover:text-white",
                          isActive(area.href) && "border-brand-red text-white"
                        )}
                      >
                        {area.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {NAV_LINKS.filter((l) => l.href !== "/").map((item) => (
              <Link key={item.href} to={item.href} className={linkClass(isActive(item.href))}>
                {item.title}
              </Link>
            ))}

            <a href={SITE.phoneHref} className="btn-red ml-2 !px-5 !py-3 !text-sm">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.vanityPhone}
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SITE.phoneHref}
              className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-red text-white"
              aria-label={`Call ${SITE.vanityPhone}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[86vw] max-w-sm border-white/10 bg-black p-0 text-white [&>button]:bg-transparent [&>button]:text-white"
              >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex h-full flex-col">
                  <div className="border-b border-white/10 px-6 pb-6 pt-10">
                    <BrandLogo
                      layout="vertical"
                      sizeClassName="text-[15px]"
                      sealClassName="h-20"
                    />
                  </div>
                  <ul className="flex-1 overflow-y-auto px-6 py-4">
                    <li>
                      <SheetClose asChild>
                        <Link to="/" className="block py-3 font-cinzel text-lg font-bold tracking-wider">
                          Home
                        </Link>
                      </SheetClose>
                    </li>
                    <li className="py-3">
                      <p className="font-cinzel text-lg font-bold tracking-wider text-brand-red">Practice Areas</p>
                      <ul className="mt-2 space-y-1 border-l border-white/15 pl-4">
                        {PRACTICE_AREAS.map((area) => (
                          <li key={area.href}>
                            <SheetClose asChild>
                              <Link to={area.href} className="block py-2 text-base font-semibold text-white/85">
                                {area.title}
                              </Link>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </li>
                    {NAV_LINKS.filter((l) => l.href !== "/").map((item) => (
                      <li key={item.href}>
                        <SheetClose asChild>
                          <Link to={item.href} className="block py-3 font-cinzel text-lg font-bold tracking-wider">
                            {item.title}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3 border-t border-white/10 p-6">
                    <a href={SITE.phoneHref} className="btn-red w-full">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Call {SITE.vanityPhone}
                    </a>
                    <a href={SITE.spanishPhoneHref} className="btn-outline-light w-full !text-sm">
                      Español: {SITE.spanishPhoneDisplay}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
