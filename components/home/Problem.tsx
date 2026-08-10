import Container from "../layout/Container";

export default function Problem() {
  return (
    <section className="py-32 bg-white">
      <Container>

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.35em] text-sm text-slate-400">
            THE PROBLEM
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#243B63]">
            Writing classes often teach
            students how to write,
            but rarely help them learn
            how to think.
          </h2>

          <p className="mt-10 text-xl leading-9 text-slate-600">
            Most classroom writing activities reward memorized
            structures, predictable answers, and formulaic essays.
            Students finish assignments without discovering new ideas,
            asking meaningful questions, or developing independent thinking.
          </p>

        </div>

      </Container>
    </section>
  );
}