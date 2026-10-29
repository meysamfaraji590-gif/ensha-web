import type { AtlasLand } from "../../data/atlas";

type LandCardProps = {
  land: AtlasLand;
  onClick: () => void;
};

export default function LandCard({ land, onClick }: LandCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 text-right transition duration-300 hover:-translate-y-1 hover:border-[#2B3A67]/20 hover:shadow-lg"
    >
      {/* visual marker */}
      <div
        className="absolute right-0 top-0 h-full w-1 bg-[#C1863C]/70 transition duration-300 group-hover:bg-[#C1863C]"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium tracking-wide text-[#C1863C]">
              {land.code}
            </span>

            <span className="h-px w-8 bg-[#C1863C]/30" />
          </div>

          <h2 className="mt-4 text-2xl font-bold leading-9 text-[#2B3A67]">
            {land.title}
          </h2>

          <p className="mt-3 text-base leading-8 text-slate-500">
            {land.description}
          </p>
        </div>

        <span
          className="mt-1 shrink-0 text-2xl text-slate-300 transition duration-300 group-hover:-translate-x-1 group-hover:text-[#2B3A67]"
          aria-hidden="true"
        >
          ←
        </span>
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-sm text-slate-400">
          {land.situations.length} موقعیت
        </span>

        <span className="text-xs font-medium text-slate-300 transition group-hover:text-[#C1863C]">
          مشاهده موقعیت‌ها
        </span>
      </div>
    </button>
  );
}
