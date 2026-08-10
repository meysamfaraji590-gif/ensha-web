import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-[#FAFAF8]">

      <Container>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-slate-500 text-sm">
            © 2026 ENSHA │ مداد فکر
          </div>

          <div className="text-slate-500 text-sm">
            Designing meaningful writing experiences.
          </div>

        </div>

      </Container>

    </footer>
  );
}