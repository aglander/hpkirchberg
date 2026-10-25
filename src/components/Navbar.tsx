import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Termine", href: "/termine" },
  { name: "Biographie", href: "/biographie" },
  { name: "Musik", href: "/musik" },
  { name: "Bilder", href: "/bilder" },
  { name: "Links", href: "/links" },
  { name: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const current = typeof window !== "undefined" ? window.location.pathname : "";
  // On the home page the hero already carries the name; the bar shows it once the hero has scrolled.
  const isHome = current === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 160);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const hideName = isHome && !scrolled;

  const linkClass = (href: string) =>
    `inline-flex items-center min-h-11 text-ink hover:text-oxblood font-semibold underline-offset-8 ${
      current === href ? "underline decoration-2 decoration-oxblood" : ""
    }`;

  return (
    <nav
      aria-label="Hauptnavigation"
      className="bg-paper sticky top-0 z-50"
      style={{ minHeight: 64 }}
    >
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:bg-ink focus:text-paper focus:px-4 focus:py-2"
      >
        Zum Inhalt springen
      </a>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="/"
            tabIndex={hideName ? -1 : undefined}
            aria-hidden={hideName || undefined}
            className={`text-2xl font-serif font-semibold text-ink transition-opacity duration-300 ${hideName ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            Hans-Peter Kirchberg
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={current === item.href ? "page" : undefined}
                className={linkClass(item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={current === item.href ? "page" : undefined}
                className={`${linkClass(item.href)} w-full text-lg`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
