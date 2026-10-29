"use client";
import Image from "next/image";
import { atlas } from "../../data/atlas";
import LandCard from "./LandCard";

type AtlasPageProps = {
  onBack: () => void;
  onSelectLand: (landId: string) => void;
};

export default function AtlasPage({ onBack, onSelectLand }: AtlasPageProps) {
  return (
    <main className="min-h-screen bg-[#F6F1E6] text-[#2B3A67]">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10">
        <header className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-sm text-slate-400 transition hover:text-[#2B3A67]"
          >
            بازگشت
          </button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="مداد فکر"
                width={40}
                height={40}
                className="rounded-xl object-cover"
              />
              <div className="text-xl font-bold">مداد فکر</div>
            </div>
          </div>
        </header>

        <section className="pb-16 pt-20">
          <div className="max-w-3xl">
            <div className="mb-6 h-px w-12 bg-[#C1863C]" />

            <div className="text-sm font-medium tracking-wide text-[#C1863C]">
              زنگ انشا
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.4] md:text-6xl">
              اطلس موقعیت‌ها
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 md:text-xl">
              هر سرزمین، راهی متفاوت برای دیدن، فکر کردن و نوشتن است. سرزمینی را
              انتخاب کنید و از میان موقعیت‌های آن، فعالیتی برای کلاس خود پیدا
              کنید.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {atlas.map((land) => (
              <LandCard
                key={land.id}
                land={land}
                onClick={() => onSelectLand(land.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
