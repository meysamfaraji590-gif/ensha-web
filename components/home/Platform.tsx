import Container from "../layout/Container";

const steps = [
  {
    number: "01",
    title: "Design",
    description:
      "Teachers design meaningful writing situations that invite students to observe, question, imagine, and think.",
  },
  {
    number: "02",
    title: "Write",
    description:
      "Students write, explore ideas, and gradually make their thinking visible through language.",
  },
  {
    number: "03",
    title: "Discover",
    description:
      "ENSHA helps identify patterns, connections, and evidence emerging across the classroom.",
  },
  {
    number: "04",
    title: "Understand",
    description:
      "Over time, teachers build a deeper understanding of how their classroom learns and develops.",
  },
];

export default function Platform() {
  return (
    <section
      id="how-it-works"
      className="bg-[#FAFAF8] py-32 md:py-40"
    >
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            HOW ENSHA WORKS
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#243B63] md:text-6xl">
            From writing to
            <br />
            understanding.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-slate-600">
            ENSHA connects the design of meaningful writing experiences with
            the discovery of educational evidence over time.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-10 md:p-12"
            >
              <p className="text-sm font-medium tracking-[0.2em] text-[#D6A73B]">
                {step.number}
              </p>

              <h3 className="mt-8 text-3xl font-semibold text-[#243B63]">
                {step.title}
              </h3>

              <p className="mt-5 max-w-md text-lg leading-8 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-[#D6A73B] py-3 pl-8">
          <p className="text-xl font-medium leading-relaxed text-[#243B63]">
            AI supports discovery. The teacher interprets and decides.
          </p>
        </div>
      </Container>
    </section>
  );
}