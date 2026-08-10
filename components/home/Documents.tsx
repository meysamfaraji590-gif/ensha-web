import Container from "../layout/Container";

const documents = [
  {
    title: "Pitch Deck",
    description:
      "An overview of ENSHA, the problem it addresses, the platform architecture, and the investment opportunity.",
    link: "/pitch-deck.pdf",
  },
  {
    title: "Business Plan",
    description:
      "The long-term strategy, business model, development roadmap, and sustainability of ENSHA.",
    link: "/business-plan.pdf",
  },
  {
    title: "Knowledge Foundation",
    description:
      "The educational, philosophical, and theoretical foundations behind ENSHA.",
    link: "/knowledge-foundation.pdf",
  },
  {
    title: "Knowledge Architecture",
    description:
      "How educational knowledge, classroom evidence, and AI-supported reasoning are organized across the platform.",
    link: "/knowledge-architecture.pdf",
  },
  {
    title: "Investment Proposal",
    description:
      "A detailed introduction to ENSHA and the opportunity to support its development.",
    link: "/investment-proposal.pdf",
  },
];

export default function Documents() {
  return (
    <section
      id="documents"
      className="bg-[#FAFAF8] py-32 md:py-40"
    >
      <Container>
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            DOCUMENTS
          </p>

          <h2 className="mt-6 text-5xl font-bold text-[#243B63] md:text-6xl">
            Go deeper.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-slate-600">
            ENSHA is built on a defined educational vision, a structured
            knowledge architecture, and a long-term product strategy. These
            documents offer a closer look at the thinking behind the project.
          </p>
        </div>

        <div className="mt-20 space-y-4">
          {documents.map((doc) => (
            <a
              key={doc.title}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#243B63]">
                    {doc.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
                    {doc.description}
                  </p>
                </div>

                <span className="shrink-0 text-3xl text-slate-300 transition group-hover:text-[#243B63]">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}