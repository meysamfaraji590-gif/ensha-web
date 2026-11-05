"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { AtlasLand, Situation } from "../../data/atlas";
import { useLanguage } from "../../i18n/LanguageProvider";

type ActivityPageProps = {
  land: AtlasLand;
  situation: Situation;
  situationNumber: number;
  onBack: () => void;
  onFinish: () => void;
};

function TwoFrameReveal({
  imagePath,
  title,
}: {
  imagePath: string;
  title: string;
}) {
  const { t } = useLanguage();
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      {!revealed && (
        <div className="flex justify-center">
          <button
            onClick={() => setRevealed(true)}
            className="rounded-full bg-[#2B3A67] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {t("revealFullFrame")}
          </button>
        </div>
      )}

      {revealed && (
        <div className="relative overflow-hidden rounded-2xl bg-[#F6F1E6]">
          <Image
            src={imagePath}
            alt={`${title} - ${t("fullFrame")}`}
            width={1600}
            height={1000}
            className="h-auto w-full object-contain"
          />
        </div>
      )}
    </>
  );
}

export default function ActivityPage({
  land,
  situation,
  situationNumber,
  onBack,
  onFinish,
}: ActivityPageProps) {
 const { language, t } = useLanguage();
const activity = situation.activity;

const displayActivity =
  language === "en"
    ? activity?.translations?.en ?? activity
    : activity;

const displayTitle =
  language === "en"
    ? situation.translations?.en?.title ?? situation.title
    : situation.title;

const displayDescription =
  language === "en"
    ? situation.translations?.en?.description ?? situation.description
    : situation.description;

const isFa = language === "fa";
  const [textMaterials, setTextMaterials] = useState<
    { path: string; content: string }[]
  >([]);

    
useEffect(() => {
  const materials = activity?.materials;

  if (!materials || materials.type !== "text") {
    setTextMaterials([]);
    return;
  }

  const textPaths = materials.items;
  let cancelled = false;

  async function loadTexts() {
    const results = await Promise.all(
      textPaths.map(async (path) => {
        const englishPath = path.replace(
          /^\/text\//,
          "/text/en/"
        );

        try {
          // در زبان انگلیسی ابتدا نسخه انگلیسی را امتحان می‌کنیم.
          if (language === "en" && englishPath !== path) {
            const englishResponse = await fetch(englishPath);
            console.log("English text path:", englishPath, "Status:", englishResponse.status);

            if (englishResponse.ok) {
              return {
                path,
                content: await englishResponse.text(),
              };
            }
          }

          // اگر نسخه انگلیسی نبود، نسخه اصلی (فارسی) بارگذاری می‌شود.
          const response = await fetch(path);

          if (!response.ok) {
            throw new Error(`Could not load ${path}`);
          }

          return {
            path,
            content: await response.text(),
          };
        } catch {
          return {
            path,
            content: t("textMaterialLoadError"),
          };
        }
      })
    );

    if (!cancelled) {
console.log(
  "Loaded text content:",
  JSON.stringify(results, null, 2)
);
  setTextMaterials(results);

    }
  }

  void loadTexts();

  return () => {
    cancelled = true;
  };
}, [activity, language, t]);

  function renderMaterials() {
    if (!activity?.materials?.required) {
      return null;
    }

    const materials = activity.materials;

    if (materials.type === "image") {
      const isTwoFrameActivity = situation.id === "05M-06";

      return (
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <div className="text-sm font-medium text-[#C1863C]">
            {t("activityImages")}
          </div>

          <div className="mt-8 space-y-8">
            <div className="overflow-hidden rounded-2xl bg-[#F6F1E6]">
              <Image
                src={materials.items[0]}
                alt={`${situation.title} - ${t("image")} 1`}
                width={1600}
                height={1000}
                className="h-auto w-full object-contain"
              />
            </div>

            {isTwoFrameActivity && materials.items[1] && (
  <TwoFrameReveal
    imagePath={materials.items[1]}
    title={situation.title}
  />
)}

            {!isTwoFrameActivity &&
              materials.items.slice(1).map((path, index) => (
                <div
                  key={path}
                  className="overflow-hidden rounded-2xl bg-[#F6F1E6]"
                >
                  <Image
                    src={path}
                    alt={`${situation.title} - ${t("image")} ${index + 2}`}
                    width={1600}
                    height={1000}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ))}
          </div>
        </section>
      );
    }

    if (materials.type === "audio") {
      return (
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <div className="text-sm font-medium text-[#C1863C]">
            {t("activityAudio")}
          </div>

          <div className="mt-8 space-y-6">
            {materials.items.map((path, index) => (
              <div key={path} className="rounded-2xl bg-[#F6F1E6] p-5">
                <div className="mb-3 text-sm text-slate-500">
                  {t("audioFile")} {index + 1}
                </div>

                <audio controls preload="metadata" className="w-full">
                  <source src={path} type="audio/mpeg" />
                  {t("audioUnsupported")}
                </audio>
              </div>
            ))}
          </div>
        </section>
      );
    }

    if (materials.type === "text") {
      return (
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <div className="text-sm font-medium text-[#C1863C]">
            {t("activityText")}
          </div>

          <div className="mt-8 space-y-6">
            {textMaterials.map(({ path, content }, index) => (
              <div key={path} className="rounded-2xl bg-[#F6F1E6] p-6">
                {textMaterials.length > 1 && (
                  <div className="mb-4 text-sm text-slate-400">
                    {t("textFile")} {index + 1}
                  </div>
                )}

                <div className="whitespace-pre-wrap text-lg leading-10 text-[#2B3A67]">
                  {content}
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }

    if (materials.type === "object") {
      return (
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <div className="text-sm font-medium text-[#C1863C]">
            {t("requiredMaterials")}
          </div>

          <div className="mt-6 space-y-3">
            {materials.items.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#F6F1E6] px-5 py-4 text-base leading-8 text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      );
    }

    return null;
  }

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="min-h-screen bg-[#F6F1E6] text-[#2B3A67]"
    >
      <div className="mx-auto w-full max-w-4xl px-6 py-8 md:px-10">
        <header className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-sm text-slate-400 transition hover:text-[#2B3A67]"
          >
            {t("back")}
          </button>

          <div className="text-xl font-bold">{t("brand")}</div>
        </header>

        <section className="py-16">
          <div className="text-sm font-medium text-[#C1863C]">
            {land.title} · {t("situationLabel")} {situationNumber}
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-[1.5] md:text-6xl">
           {displayTitle}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
           {displayDescription}
          </p>

          {!activity ? (
            <div className="mt-12 rounded-3xl border border-dashed border-slate-200 bg-white p-8 md:p-10">
              <div className="text-sm font-medium text-[#C1863C]">
                {t("activity")}
              </div>

              <p className="mt-4 text-lg leading-9 text-slate-500">
                {t("activityNotReady")}
              </p>
            </div>
          ) : (
            <>
              <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
                <div className="text-sm font-medium text-[#C1863C]">
                  {t("activityPurpose")}
                </div>

                <p className="mt-5 text-lg leading-9 text-slate-600">
                  {displayActivity?.purpose ?? activity.purpose}
                </p>
              </div>

              {renderMaterials()}

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
                <div className="text-sm font-medium text-[#C1863C]">
                  {t("executionGuide")}
                </div>

                <p className="mt-5 text-lg leading-9 text-slate-600">
                  {displayActivity?.instruction ?? activity.instruction}
                </p>

             <div className="mt-8 space-y-4">
               {(displayActivity?.steps ?? activity.steps).map((step, index) => (
             <div key={index} className="flex items-start gap-4">
             <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6F1E6] text-sm font-semibold text-[#2B3A67]">
              {index + 1}
            </div>

             <p className="pt-1 text-base leading-8 text-slate-600">
              {step}
            </p>
            </div>
           ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
        <div className="text-sm font-medium text-[#C1863C]">
         {t("suggestedQuestions")}
        </div>

        <p className="mt-3 text-sm leading-7 text-slate-400">
         {t("suggestedQuestionsNote")}
        </p>

        <div className="mt-8 space-y-5">
         {(displayActivity?.questions ?? activity.questions).map((question, index) => (
        <div
        key={index}
        className={`border-[#C1863C]/40 ${
          isFa
            ? "border-r-2 pr-5"
            : "border-l-2 pl-5"
        }`}
      >
        <p className="text-lg leading-9 text-[#2B3A67]">
          {question}
        </p>
      </div>
    ))}
  </div>
</div>
              {activity.teacherNote && (
                <div className="mt-6 rounded-3xl bg-[#2B3A67] p-8 text-white md:p-10">
                  <div className="text-sm font-medium text-[#C1863C]">
                    {t("teacherNote")}
                  </div>

                  <p className="mt-4 text-base leading-8 text-white/80">
                    {displayActivity?.teacherNote ?? activity.teacherNote}
                  </p>
                </div>
              )}

              <div className="mt-6 rounded-2xl border border-dashed border-slate-200 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-slate-400">
                      {t("futureDevelopment")}
                    </div>

                    <p className="mt-1 text-sm leading-7 text-slate-400">
                      {t("futureDevelopmentDescription")}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-400">
                    {t("comingSoon")}
                  </span>
                </div>
              </div>
            </>
          )}

          <div className={`mt-10 flex ${isFa ? "justify-start" : "justify-end"}`}>
            <button
              onClick={onFinish}
              className="rounded-full bg-[#2B3A67] px-8 py-4 text-lg font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {t("finishActivity")}
              <span
                className={isFa ? "mr-3" : "ml-3"}
                aria-hidden="true"
              >
                {isFa ? "←" : "→"}
              </span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}