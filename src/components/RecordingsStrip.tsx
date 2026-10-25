import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { albums } from "@/data/albums";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import Reveal from "./Reveal";

const latest = albums.filter((a) => a.coverImage).slice(0, 10);
const clean = (t: string) => t.replace(/\\"/g, '"');
const NAV = 64;
// How many pixels of page scroll move the shelf by one pixel.
const RATIO = 0.7;

const shelfPadding =
  "pl-5 md:pl-[max(2rem,calc((100vw-72rem)/2+2rem))] pr-5 md:pr-8";

const Header = ({ children }: { children?: React.ReactNode }) => (
  <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 mb-8">
    <h2 id="recordings-heading" className="font-serif font-semibold text-[clamp(2rem,3.4vw,3rem)] leading-[1.1]">
      Aufnahmen
    </h2>
    <div className="flex items-center gap-6">
      <a
        href="/musik"
        className="inline-flex items-center min-h-12 underline underline-offset-8 decoration-2 decoration-oxblood font-semibold hover:text-oxblood"
      >
        Zur Diskographie
      </a>
      {children}
    </div>
  </div>
);

const Item = ({ a, onFocus }: { a: (typeof latest)[number]; onFocus?: () => void }) => (
  <li className="snap-start shrink-0 w-[68vw] sm:w-64 md:w-72">
    <a href="/musik" onFocus={onFocus} className="group block">
      <div className="aspect-square overflow-hidden bg-ink/10">
        <img
          src={a.coverImage}
          alt={`Cover: ${clean(a.title)}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-4 font-serif font-semibold text-3xl leading-none [font-variant-numeric:lining-nums]">
        {a.year}
      </p>
      <p className="mt-2 font-serif font-semibold text-xl leading-tight group-hover:text-oxblood">
        {clean(a.title)}
      </p>
      {a.composer && <p className="mt-1 text-ink-soft">{a.composer}</p>}
    </a>
  </li>
);

// The shelf is pinned while the page scrolls and slides sideways with it.
// With reduced motion it is an ordinary, swipeable row instead.
const RecordingsStrip = () => {
  const [reduced, setReduced] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const shelf = useRef<HTMLUListElement>(null);
  const [dist, setDist] = useState(0);
  const progress = useScrollProgress(wrapRef);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const measure = () => {
      const t = trackRef.current;
      if (t) setDist(Math.max(0, t.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  if (reduced) {
    const scrollBy = (dir: 1 | -1) =>
      shelf.current?.scrollBy({ left: dir * shelf.current.clientWidth * 0.8, behavior: "smooth" });
    return (
      <section aria-labelledby="recordings-heading">
        <Header>
          <div className="hidden md:flex gap-1">
            <button type="button" onClick={() => scrollBy(-1)} aria-label="Zurück blättern" className="w-12 h-12 inline-flex items-center justify-center hover:text-oxblood">
              <ArrowLeft size={22} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollBy(1)} aria-label="Weiter blättern" className="w-12 h-12 inline-flex items-center justify-center hover:text-oxblood">
              <ArrowRight size={22} aria-hidden="true" />
            </button>
          </div>
        </Header>
        <ul
          ref={shelf}
          tabIndex={0}
          aria-label="Aufnahmen, seitlich blätterbar"
          className={`flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 ${shelfPadding} [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
        >
          {latest.map((a) => (
            <Item key={a.title + a.year} a={a} />
          ))}
        </ul>
      </section>
    );
  }

  const run = dist * RATIO;
  // Keyboard focus on a cover that is off to the side scrolls the page to it.
  const reveal = (i: number) => () => {
    const el = trackRef.current?.children[i] as HTMLElement | undefined;
    const wrap = wrapRef.current;
    if (!el || !wrap || dist === 0) return;
    const target = Math.min(1, Math.max(0, (el.offsetLeft - 32) / dist));
    window.scrollTo({ top: wrap.getBoundingClientRect().top + window.scrollY + target * run - NAV });
  };

  return (
    <section aria-labelledby="recordings-heading">
      <div ref={wrapRef} style={{ height: `calc(100svh - ${NAV}px + ${run}px)` }}>
        <div
          className="sticky flex flex-col justify-center overflow-hidden"
          style={{ top: NAV, height: `calc(100svh - ${NAV}px)` }}
        >
          <Reveal>
            <Header />
            <ul
              ref={trackRef}
              className={`flex gap-6 md:gap-8 w-max ${shelfPadding} will-change-transform`}
              style={{ transform: `translateX(${-progress * dist}px)` }}
            >
              {latest.map((a, i) => (
                <Item key={a.title + a.year} a={a} onFocus={reveal(i)} />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default RecordingsStrip;
