import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const photos = [
  { src: "/assets/pictures/pianist/01.jpg", year: "1962", alt: "Der junge Hans-Peter Kirchberg am Klavier, Schwarzweißfoto von 1962", position: "object-[68%_50%]" },
  { src: "/assets/pictures/pianist/02.jpg", year: "1970", alt: "Hans-Peter Kirchberg als junger Pianist am Flügel, 1970", position: "object-[50%_30%]" },
  { src: "/assets/pictures/dirigent/11.jpg", year: "1983", alt: "Hans-Peter Kirchberg beim Dirigieren, 1983", position: "object-[50%_30%]" },
  { src: "/assets/pictures/pianist/20.jpg", year: "1991", alt: "Gruppenfoto aus dem Jahr 1991", position: "object-[50%_30%]" },
  { src: "/assets/pictures/dirigent/34.jpg", year: "2002", alt: "Dirigat vor einem Vokalensemble, 2002", position: "object-[50%_40%]" },
  { src: "/assets/pictures/dirigent/39.jpg", year: "2008", alt: "Konzertfoto aus dem Jahr 2008", position: "object-[50%_30%]" },
  { src: "/assets/pictures/dirigent/44.jpg", year: "2015", alt: "Foto aus dem Jahr 2015", position: "object-[50%_30%]" },
];

// The year stays put, as large as the page allows, and changes as the
// photographs of six decades pass beside it.
const ArchiveStrip = () => {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section aria-labelledby="archive-heading" className="max-w-6xl mx-auto px-5 md:px-8">
      <div className="grid md:grid-cols-12 gap-x-10">
        <div className="md:col-span-6">
          <div className="md:sticky md:top-16 md:h-[calc(100svh-4rem)] flex flex-col justify-center pt-12 md:pt-0">
            <h2
              id="archive-heading"
              className="font-serif font-semibold text-[clamp(2.25rem,3.8vw,3.5rem)] leading-[1.08] max-w-[16ch] text-balance"
            >
              Hier können Sie mich in Bild und Wort kennenlernen.
            </h2>
            <p
              aria-hidden="true"
              className="hidden md:block mt-10 font-serif font-semibold leading-[0.8] -tracking-[0.03em] text-[clamp(6rem,17vw,15rem)] [font-variant-numeric:lining-nums_tabular-nums]"
            >
              {photos[active].year}
            </p>
            <a
              href="/bilder"
              className="hidden md:inline-flex mt-8 items-center min-h-12 underline underline-offset-8 decoration-2 decoration-oxblood font-semibold hover:text-oxblood"
            >
              Alle Bilder ansehen
            </a>
          </div>
        </div>
        <ul className="md:col-span-6 space-y-10 md:space-y-[14svh] md:pt-[6svh] md:pb-[10svh]">
          {photos.map((photo, i) => (
            <li key={photo.src} data-i={i} ref={(el) => (items.current[i] = el)}>
              <Reveal>
                <figure>
                  <div className="aspect-[4/5] overflow-hidden bg-ink/10">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className={`w-full h-full object-cover ${photo.position}`}
                    />
                  </div>
                  <figcaption className="mt-3 font-serif font-semibold text-5xl text-ink md:font-sans md:font-normal md:text-base md:text-ink-soft [font-variant-numeric:lining-nums]">{photo.year}</figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="/bilder"
        className="md:hidden mt-10 inline-flex items-center min-h-12 underline underline-offset-8 decoration-2 decoration-oxblood font-semibold hover:text-oxblood"
      >
        Alle Bilder ansehen
      </a>
    </section>
  );
};

export default ArchiveStrip;
