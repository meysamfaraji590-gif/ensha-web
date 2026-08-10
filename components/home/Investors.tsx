import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Investors() {
  return (
    <section
      id="investors"
      className="bg-[#243B63] py-32 text-white md:py-40"
    >
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-300">
            FOR INVESTORS
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Building the future of
            <br />
            thinking through writing.
          </h2>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-slate-300">
            ENSHA is building an educational ecosystem designed to help
            teachers cultivate thinking through writing—using technology to
            support educational judgment, not replace it.
          </p>

          <div className="mt-14 flex flex-wrap gap-5">
            <a
              href="/pitch-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                Read the Pitch Deck
              </Button>
            </a>

            <a href="#contact">
              <Button>
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}