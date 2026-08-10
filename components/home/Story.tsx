import Container from "../layout/Container";

export default function Story() {
  return (
    <section
      id="story"
      className="border-y border-black/5 bg-white py-32 md:py-40"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            THE STORY
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#243B63] md:text-6xl">
            A sentence can reveal
            <br />
            more than an answer.
          </h2>

          <div className="mt-16 space-y-9 text-xl leading-[2] text-slate-600">
            <p>
              A child writes a sentence. On the surface, it may look like a
              simple answer to a classroom assignment. But behind that sentence
              there may be a question, an assumption, an unexpected connection,
              a way of seeing, or the first trace of an idea still taking shape.
            </p>

            <p>
              The problem is that classrooms rarely have enough time to notice
              all of this. Writing is often reduced to an assignment to be
              completed and evaluated, while much of the thinking that appears
              through writing remains unseen.
            </p>

            <p>
              ENSHA begins from a different premise: writing is not only a way
              to express thinking. It can also be a way to discover it.
            </p>

            <p>
              The platform helps teachers design meaningful writing experiences,
              examine patterns that emerge across a classroom, and gradually
              build a deeper understanding of how learning develops over time.
              AI contributes evidence and hypotheses. It does not make
              educational decisions.
            </p>

            <blockquote className="border-l-2 border-[#D6A73B] py-4 pl-8 text-2xl font-medium leading-relaxed text-[#243B63]">
              The teacher remains the person who understands, interprets,
              and decides.
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}