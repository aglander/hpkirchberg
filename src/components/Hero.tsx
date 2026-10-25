import { useEffect, useRef, useState } from "react";
import ResponsiveImage from "./ResponsiveImage";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

const NAV = 64;
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

// Insets (top, right, bottom, left) of the window on the first frame. On a
// desktop it sits flush with the right edge of the page column, so the face
// in the photograph stays inside it at every width.
const windowInsets = (vw: number, vh: number) => {
  const mobile = vw < 768;
  const cw = Math.min(vw, 1152);
  const cl = (vw - cw) / 2;
  const w = mobile ? vw * 0.78 : cw * 0.44;
  const h = Math.min(w * 1.25, mobile ? vh * 0.42 : vh * 0.86);
  const left = mobile ? (vw - w) / 2 : cl + cw - w;
  const top = mobile ? vh * 0.22 : (vh - h) / 2;
  return { top, right: vw - left - w, bottom: vh - top - h, left };
};

const Hero = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(wrapRef);
  const [size, setSize] = useState({ vw: 1280, vh: 800 });

  useEffect(() => {
    const measure = () =>
      setSize({ vw: window.innerWidth, vh: window.innerHeight - NAV });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const open = ease(Math.min(1, progress / 0.7));
  const s = windowInsets(size.vw, size.vh);
  const inset = (v: number) => `${Math.round(v * (1 - open))}px`;
  const textOpacity = Math.max(0, 1 - progress / 0.1);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div ref={wrapRef} className="relative"
      style={{ height: reduced ? `calc(100svh - ${NAV}px)` : "140svh" }}>
      <div
        className="sticky overflow-hidden bg-paper"
        style={{ top: NAV, height: `calc(100svh - ${NAV}px)` }}
      >
        <div
          className="absolute inset-0 bg-ink/10"
          style={{
            clipPath: `inset(${inset(s.top)} ${inset(s.right)} ${inset(s.bottom)} ${inset(s.left)})`,
          }}
        >
          <ResponsiveImage
            imageUrl="assets/hero.jpg"
            alt="Hans-Peter Kirchberg beim Dirigieren"
            className="w-full h-full object-cover object-[72%_18%]"
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: textOpacity,
            transform: `translateY(${-40 * (1 - textOpacity)}px)`,
          }}
        >
          <div className="relative h-full max-w-6xl mx-auto px-5 md:px-8">
          <div
            className="absolute left-5 right-5 top-8 bottom-8 md:left-8 md:right-auto md:top-auto md:bottom-[var(--photo-bottom)] md:max-w-[44%] flex flex-col justify-between md:justify-end md:gap-7"
            style={{ ["--photo-bottom" as string]: `${Math.round(s.bottom)}px` }}
          >
            <h1 className="text-ink font-serif text-[clamp(2.75rem,12vw,3.5rem)] md:text-[clamp(3.5rem,8vw,8.5rem)] leading-[0.88] -tracking-[0.02em]">
              Hans-Peter Kirchberg
            </h1>
            <div className="pointer-events-auto">
              <p className="text-xl text-ink max-w-[26ch]">
                Dirigent, Pianist und Musikalischer Leiter. Musik mit Leidenschaft.
              </p>
              <a
                href="/musik"
                className="mt-5 inline-flex items-center min-h-12 px-6 bg-oxblood text-paper font-semibold hover:bg-ink transition-colors whitespace-nowrap w-full md:w-auto justify-center"
              >
                Zu den Aufnahmen
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
