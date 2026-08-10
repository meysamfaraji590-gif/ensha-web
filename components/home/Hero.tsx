import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#FAFAF8]"
    >
      <Container>
        <div className="max-w-5xl py-28">
          <img
            src="/logo.png"
            alt="ENSHA | مداد فکر"
            className="w-28 mb-8"
          />

          <h1 className="flex flex-wrap items-baseline gap-x-4 gap-y-3 text-[#243B63]">
            <span
              className="text-5xl font-bold tracking-tight md:text-7xl"
              style={{ fontFamily: "var(--font-ensha)" }}
            >
              ENSHA
            </span>

            <span className="text-3xl font-light text-slate-400 md:text-4xl">
              │
            </span>

            <span
              className="text-4xl md:text-6xl"
              dir="rtl"
              style={{ fontFamily: "var(--font-medad)" }}
            >
              مداد فکر
            </span>
          </h1>

          <p className="mt-7 text-sm font-medium tracking-[0.18em] text-slate-500 md:text-base">
            WRITING • THINKING • DISCOVERY
          </p>

          <p className="mt-12 max-w-3xl text-xl leading-10 text-slate-600">
            ENSHA is an educational ecosystem that helps teachers cultivate
            thinking through writing. It supports the design of meaningful
            writing experiences, the discovery of educational patterns, and
            the development of long-term classroom understanding.
          </p>

          <div className="mt-14 flex flex-wrap gap-5">
            <a href="#story">
              <Button>Discover ENSHA</Button>
            </a>

            <a
              href="/pitch-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                Read the Pitch Deck
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}