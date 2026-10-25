import Reveal from "./Reveal";
import NextEvent from "./NextEvent";

const Welcome = () => (
  <section aria-labelledby="welcome-heading" className="max-w-6xl mx-auto px-5 md:px-8">
    <div className="grid gap-12 md:grid-cols-12 md:gap-x-10">
      <Reveal className="md:col-span-7">
        <h2 id="welcome-heading" className="font-serif font-semibold text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.15] mb-8">
          Herzlich Willkommen auf meiner persönlichen Webseite!
        </h2>
        <p className="text-xl max-w-[58ch] mb-8">
          Ich würde mich freuen, wenn die Webseite Ihnen hilft, all jene Informationen über meine bisherige, gegenwärtige und zukünftige Arbeit zu finden, die Sie, verehrter Besucher, benötigen.
        </p>
        <img
          src="/assets/general/signatur.gif"
          alt="Handschriftliche Unterschrift von Hans-Peter Kirchberg"
          className="h-16 mb-2"
        />
        <p className="text-xl font-serif">Hans-Peter Kirchberg</p>
      </Reveal>
      <Reveal delay={120} className="md:col-span-4 md:col-start-9">
        <NextEvent />
      </Reveal>
    </div>
  </section>
);

export default Welcome;
