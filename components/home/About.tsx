import Container from "../layout/Container";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-32 md:py-40"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            ABOUT ENSHA
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#243B63] md:text-6xl">
            Writing as a way
            <br />
            of thinking.
          </h2>

          <div className="mt-16 text-xl leading-[2] text-slate-600">
            <p>
              ENSHA is an educational ecosystem designed to help teachers
              cultivate thinking through writing. It brings together a
              structured framework for designing meaningful writing
              experiences, an evolving atlas of educational methods, and
              AI-supported tools for discovering patterns and evidence across
              the classroom. Rather than reducing learning to scores, labels,
              or automated judgments, ENSHA treats writing as a record of
              thinking in motion—something that can be revisited, interpreted,
              and understood over time. AI supports the discovery of
              possibilities and evidence, while the teacher remains responsible
              for interpretation, educational judgment, and every meaningful
              decision in the learning process.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}