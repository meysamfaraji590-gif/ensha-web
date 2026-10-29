"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { AtlasLand, Situation } from "../../data/atlas";

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
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      {!revealed && (
        <div className="flex justify-center">
          <button
            onClick={() => setRevealed(true)}
            className="rounded-full bg-[#2B3A67] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md"
          >
            دیدن قاب کامل
          </button>
        </div>
      )}

      {revealed && (
        <div className="relative overflow-hidden rounded-2xl bg-[#F6F1E6]">
          <Image
            src={imagePath}
            alt={`${title} - قاب کامل`}
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
  const activity = situation.activity;
  console.log("ACTIVITY MATERIALS:", situation.id, activity?.materials);

  const [textMaterials, setTextMaterials] = useState<
    { path: string; content: string }[]
  >([]);

  useEffect(() => {
    const materials = activity?.materials;

    if (!materials || materials.type !== "text") {
      return;
    }
    const textPaths = materials.items;

    let cancelled = false;

    async function loadTexts() {
      const results = await Promise.all(
        textPaths.map(async (path) => {
          try {
            const response = await fetch(path);

            if (!response.ok) {
              throw new Error(`Could not load ${path}`);
            }

            const content = await response.text();

            return {
              path,
              content,
            };
          } catch {
            return {
              path,
              content: "متن این فعالیت قابل بارگذاری نیست.",
            };
          }
        }),
      );

      if (!cancelled) {
        setTextMaterials(results);
      }
    }

    loadTexts();

    return () => {
      cancelled = true;
    };
  }, [activity]);

  function renderMaterials() {
    if (!activity?.materials?.required) {
      return null;
    }

    const materials = activity.materials;

    if (materials.type === "image") {
      const isTwoFrameActivity = situation.id === "05M-06";

      return (
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <div className="text-sm font-medium text-[#C1863C]">تصویر فعالیت</div>

          <div className="mt-8 space-y-8">
            <div className="overflow-hidden rounded-2xl bg-[#F6F1E6]">
              <Image
                src={materials.items[0]}
                alt={`${situation.title} - تصویر 1`}
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
                    alt={`${situation.title} - تصویر ${index + 2}`}
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
          <div className="text-sm font-medium text-[#C1863C]">صدای فعالیت</div>

          <div className="mt-8 space-y-6">
            {materials.items.map((path, index) => (
              <div key={path} className="rounded-2xl bg-[#F6F1E6] p-5">
                <div className="mb-3 text-sm text-slate-500">
                  فایل صوتی {index + 1}
                </div>

                <audio controls preload="metadata" className="w-full">
                  <source src={path} type="audio/mpeg" />
                  مرورگر شما از پخش این فایل صوتی پشتیبانی نمی‌کند.
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
          <div className="text-sm font-medium text-[#C1863C]">متن فعالیت</div>

          <div className="mt-8 space-y-6">
            {textMaterials.map(({ path, content }, index) => (
              <div key={path} className="rounded-2xl bg-[#F6F1E6] p-6">
                {textMaterials.length > 1 && (
                  <div className="mb-4 text-sm text-slate-400">
                    متن {index + 1}
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
            وسایل موردنیاز
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
    <main className="min-h-screen bg-[#F6F1E6] text-[#2B3A67]">
      <div className="mx-auto w-full max-w-4xl px-6 py-8 md:px-10">
        <header className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-sm text-slate-400 transition hover:text-[#2B3A67]"
          >
            بازگشت
          </button>

          <div className="text-xl font-bold">مداد فکر</div>
        </header>

        <section className="py-16">
          <div className="text-sm font-medium text-[#C1863C]">
            {land.title} · موقعیت {situationNumber}
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-[1.5] md:text-6xl">
            {situation.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
            {situation.description}
          </p>

          {!activity ? (
            <div className="mt-12 rounded-3xl border border-dashed border-slate-200 bg-white p-8 md:p-10">
              <div className="text-sm font-medium text-[#C1863C]">فعالیت</div>

              <p className="mt-4 text-lg leading-9 text-slate-500">
                راهنمای اجرای این موقعیت هنوز آماده نشده است.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
                <div className="text-sm font-medium text-[#C1863C]">
                  هدف موقعیت
                </div>

                <p className="mt-5 text-lg leading-9 text-slate-600">
                  {activity.purpose}
                </p>
              </div>

              {renderMaterials()}

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
                <div className="text-sm font-medium text-[#C1863C]">
                  راهنمای اجرا
                </div>

                <p className="mt-5 text-lg leading-9 text-slate-600">
                  {activity.instruction}
                </p>

                <div className="mt-8 space-y-4">
                  {activity.steps.map((step, index) => (
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
                  پرسش‌های پیشنهادی
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  معلم می‌تواند بر اساس فضای کلاس، از این پرسش‌ها استفاده کند یا
                  آن‌ها را تغییر دهد.
                </p>

                <div className="mt-8 space-y-5">
                  {activity.questions.map((question, index) => (
                    <div
                      key={index}
                      className="border-r-2 border-[#C1863C]/40 pr-5"
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
                    یادداشت برای معلم
                  </div>

                  <p className="mt-4 text-base leading-8 text-white/80">
                    {activity.teacherNote}
                  </p>
                </div>
              )}

              <div className="mt-6 rounded-2xl border border-dashed border-slate-200 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-slate-400">
                      فضای توسعه
                    </div>

                    <p className="mt-1 text-sm leading-7 text-slate-400">
                      پیشنهاد، شخصی‌سازی، حافظه کلاس و سایر ابزارهای هوشمند در
                      نسخه‌های آینده به این چرخه اضافه خواهند شد.
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-400">
                    به‌زودی
                  </span>
                </div>
              </div>
            </>
          )}

          <div className="mt-10 flex justify-end">
            <button
              onClick={onFinish}
              className="rounded-full bg-[#2B3A67] px-8 py-4 text-lg font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              پایان فعالیت
              <span className="mr-3" aria-hidden="true">
                ←
              </span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
