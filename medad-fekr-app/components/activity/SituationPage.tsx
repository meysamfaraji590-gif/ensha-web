"use client";
import type { AtlasLand, Situation } from "../../data/atlas";

type SituationPageProps = {
  land: AtlasLand;
  situation: Situation;
  situationNumber: number;
  onBack: () => void;
  onStart: () => void;
};

export default function SituationPage({
  land,
  situation,
  situationNumber,
  onBack,
  onStart,
}: SituationPageProps) {
  return (
    <main className="min-h-screen bg-[#F6F1E6] text-[#2B3A67]">
      <div className="mx-auto w-full max-w-4xl px-6 py-8 md:px-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-sm text-slate-400 transition hover:text-[#2B3A67]"
          >
            بازگشت
          </button>

          <div className="text-xl font-bold">مداد فکر</div>
        </header>

        {/* Situation */}
        <section className="flex min-h-[80vh] items-center py-16">
          <div className="w-full">
            {/* Land + situation number */}
            <div className="text-sm font-medium text-[#C1863C]">
              {land.title} · موقعیت {situationNumber}
            </div>

            {/* Title */}
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.5] md:text-6xl">
              {situation.title}
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-600 md:text-xl">
              {situation.description}
            </p>

            {/* Start button */}
            <div className="mt-14">
              <button
                onClick={onStart}
                className="inline-flex items-center rounded-full bg-[#2B3A67] px-8 py-4 text-lg font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                شروع فعالیت
                <span className="mr-3" aria-hidden="true">
                  ←
                </span>
              </button>
            </div>

            {/* Future activity placeholder */}
            <div className="mt-16 rounded-3xl border border-dashed border-slate-300 bg-white/50 p-8">
              <p className="text-sm leading-7 text-slate-400">
                محتوای اجرایی این موقعیت در مرحله‌ی بعد در این بخش قرار خواهد
                گرفت.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
