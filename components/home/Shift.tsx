import Container from "../layout/Container";

export default function Shift() {
  return (
    <section className="py-32 bg-[#F7F5F1]">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-slate-400">
            A DIFFERENT APPROACH
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#243B63]">
            Writing is not the goal.
            <br />
            Thinking is.
          </h2>

          <p className="mt-10 text-xl leading-9 text-slate-600">
            ENSHA transforms writing activities into thinking experiences.
            Instead of asking students to produce essays,
            it helps teachers design situations where ideas emerge,
            questions grow,
            and genuine reflection begins.
          </p>

        </div>

      </Container>
    </section>
  );
}