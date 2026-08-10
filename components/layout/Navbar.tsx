import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/80 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <div className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="ENSHA"
            width={42}
            height={42}
          />

          <div className="leading-tight">

            <div className="font-bold tracking-wide">
              ENSHA │ مداد فکر
            </div>

            <div className="text-xs text-slate-500">
              WRITING • THINKING • DISCOVERY
            </div>

          </div>

        </div>

        <nav className="hidden md:flex gap-10 text-sm text-slate-600">

          <a href="#story">Story</a>

          <a href="#about">About</a>

          <a href="#documents">Documents</a>

          <a href="#investors">Investors</a>

          <a href="#contact">Contact</a>

        </nav>

      </div>
    </header>
  );
}