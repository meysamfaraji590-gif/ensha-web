"use client";

import type { AtlasLand } from "../../data/atlas";
import { useLanguage } from "../../i18n/LanguageProvider";

type LandCardProps = {
  land: AtlasLand;
  onClick: () => void;
};

export default function LandCard({ land, onClick }: LandCardProps) {
  const { language, t } = useLanguage();
  const isFa = language === "fa";

  return (
    <button
      type="button"
      onClick={onClick}
      dir={isFa ? "rtl" : "ltr"}
      className={`group relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 text-start transition duration-300 hover:-translate-y-1 hover:border-[#2B3A67]/20 hover:shadow-lg ${
        isFa ? "text-right" : "text-left"
      }`}
    >
      {/* Visual marker */}
      <div
        className={`absolute top-0 h-full w-1 bg-[#C1863C]/70 transition duration-300 group-hover:bg-[#C1863C] ${
          isFa ? "right-0" : "left-0"
        }`}
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
           {language === "en"
           ? land.translations?.en?.title ?? land.title
           : land.title}
          </h2>

          <p className="mt-3 text-base leading-8 text-slate-500">
           {language === "en"
           ? land.translations?.en?.description ?? land.description
           : land.description}
          </p>
        </div>

        <span
          className="mt-1 shrink-0 text-2xl text-slate-300 transition duration-300 group-hover:text-[#2B3A67] ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
          aria-hidden="true"
        >
          {isFa ? "←" : "→"}
        </span>
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-sm text-slate-400">
          {land.situations.length} {t("situationCount")}
        </span>

        <span className="text-xs font-medium text-slate-300 transition group-hover:text-[#C1863C]">
          {t("viewSituations")}
        </span>
      </div>
    </button>
  );
}