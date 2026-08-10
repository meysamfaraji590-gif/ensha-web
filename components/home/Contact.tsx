import Container from "../layout/Container";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FAFAF8] py-32 md:py-40">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            CONTACT
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#243B63] md:text-6xl">
            Let&apos;s start
            <br />
            a conversation.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-slate-600">
            Whether you are interested in collaboration, research, piloting
            ENSHA, or exploring its investment potential, we would be glad to
            hear from you.
          </p>

          <div className="mt-12 max-w-3xl border-t border-slate-200 pt-10">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              CO-FOUNDER
            </p>

            <p className="mt-4 text-lg leading-9 text-slate-600">
              ENSHA is being developed by Meysam Faraji, co-founder and
              educator. Based in Zanjan Province, Iran, Meysam is an elementary
              school teacher with a particular interest in writing, thinking,
              and curriculum design.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="mailto:meysamfaraji590@gmail.com"
              className="inline-flex items-center gap-3 text-xl font-semibold text-[#243B63] transition hover:opacity-70"
            >
              meysamfaraji590@gmail.com
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}