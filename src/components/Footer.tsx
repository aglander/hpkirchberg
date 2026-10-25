const legal = [
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
];

const Footer = ({ closing = false }: { closing?: boolean }) => (
  <footer className="bg-ink text-paper overflow-hidden">
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      {closing && (
        <div className="pt-20 md:pt-28">
          <a
            href="/kontakt"
            className="inline-block font-serif font-semibold text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] underline decoration-2 underline-offset-[0.18em] decoration-paper/50 hover:decoration-paper transition-colors"
          >
            Schreiben Sie mir.
          </a>
        </div>
      )}

      <div className={`flex flex-wrap justify-between gap-x-8 gap-y-1 text-base ${closing ? "mt-16 md:mt-24 pb-8" : "py-8"}`}>
        <p>© {new Date().getFullYear()} Hans-Peter Kirchberg</p>
        <div className="flex flex-wrap gap-x-6">
          {legal.map((item) => (
            <a key={item.name} href={item.href} className="inline-flex items-center min-h-11 hover:underline underline-offset-4">
              {item.name}
            </a>
          ))}
          <a
            href="https://www.vanglan.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center min-h-11 underline underline-offset-4"
          >
            Website von vanglan.com
          </a>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
