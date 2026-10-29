"use client";

import { App as CapacitorApp } from "@capacitor/app";
import { useSyncExternalStore, useState, useEffect, useRef } from "react";
import SupportPage from "@/components/support/SupportPage";
import AtlasPage from "../components/atlas/AtlasPage";
import ActivityPage from "../components/activity/ActivityPage";
import EndPage from "../components/activity/EndPage";
import { getLandById } from "../data/atlas";
import Image from "next/image";
type Screen = "main" | "atlas" | "land" | "activity" | "end" | "support";

const introSlides = [
  {
    eyebrow: "زنگ انشا...",
    title: "چرا برای بعضی از بچه‌ها، زنگ نوشتن,",
    text: "به زنگ خیره شدن به کاغذ تبدیل می‌شود؟",
  },

  {
    eyebrow: "اگر کمی مکث کنیم...",
    title:
      "چه می‌شود اگر کودک، پیش از آن که مداد را روی کاغذ حرکت دهد، کمی مکث کند",
    text: "تا در فکر خود قدم بزند؟",
  },

  {
    eyebrow: "مداد فکر",
    title: "تلاش مداد فکر شروع زنگ انشا نه از یک موضوع، بلکه از یک موقعیت است.",
    text: "ساختن لحظه‌هایی که ارزش نوشتن پیدا کنند.",
  },
];
export default function Home() {
  const started = useSyncExternalStore(
    (onStoreChange) => {
      const handleChange = () => onStoreChange();

      window.addEventListener("medad-fekr-intro-change", handleChange);

      return () => {
        window.removeEventListener("medad-fekr-intro-change", handleChange);
      };
    },
    () => localStorage.getItem("medad-fekr-intro") === "true",
    () => false,
  );

  const [introSlide, setIntroSlide] = useState(0);
  const [screen, setScreen] = useState<Screen>("main");
  const screenHistory = useRef<Screen[]>([]);

  function navigateTo(nextScreen: Screen) {
    if (nextScreen === screen) return;

    screenHistory.current.push(screen);
    setScreen(nextScreen);
  }

  function handleBack() {
    if (premiumFeature !== null) {
      setPremiumFeature(null);
      return;
    }

    const previousScreen = screenHistory.current.pop();

    if (previousScreen) {
      setScreen(previousScreen);
      return;
    }

    if (screen !== "main") {
      setScreen("main");
      return;
    }
  }
  const [premiumFeature, setPremiumFeature] = useState<
    "class" | "archive" | null
  >(null);
  const [selectedLandId, setSelectedLandId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen, selectedLandId]);

  useEffect(() => {
    let listenerHandle: { remove: () => Promise<void> } | undefined;
    let isActive = true;
    CapacitorApp.addListener("backButton", () => {
      handleBack();
    }).then((listener) => {
      if (isActive) {
        listenerHandle = listener;
      } else {
        void listener.remove();
      }
    });

    return () => {
      isActive = false;
      void listenerHandle?.remove();
    };
  }, [screen, premiumFeature]);

  const [selectedSituationId, setSelectedSituationId] = useState<string | null>(
    null,
  );

  function handleIntroNext() {
    if (introSlide < introSlides.length - 1) {
      setIntroSlide((current) => current + 1);
      return;
    }

    localStorage.setItem("medad-fekr-intro", "true");
    window.dispatchEvent(new Event("medad-fekr-intro-change"));
    setScreen("main");
  }

  function handleSelectLand(landId: string) {
    setSelectedLandId(landId);
    navigateTo("land");
  }

  function handleSelectSituation(landId: string, situationId: string) {
    setSelectedLandId(landId);
    setSelectedSituationId(situationId);
    navigateTo("activity");
  }
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [screen, selectedLandId, selectedSituationId]);
  /*
   * INTRO
   */
  if (!started) {
    const currentSlide = introSlides[introSlide];

    return (
      <main className="min-h-screen bg-[#F6F1E6] text-[#2B3A67]">
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 md:px-10">
          <header className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3">
              <div>
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

                <div className="mt-0.5 text-xs text-slate-400">
                  دستیار معلم برای زنگ انشا
                </div>
              </div>
            </div>
          </header>

          <section className="flex flex-1 items-center justify-center py-16">
            <div className="w-full max-w-3xl text-center">
              <div className="mb-8 text-sm font-medium tracking-wide text-[#C1863C]">
                {currentSlide.eyebrow}
              </div>

              <h1 className="text-4xl font-bold leading-[1.5] md:text-6xl">
                {currentSlide.title}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-slate-600 md:text-xl">
                {currentSlide.text}
              </p>

              <button
                onClick={handleIntroNext}
                className="mt-12 inline-flex items-center rounded-full bg-[#2B3A67] px-8 py-4 text-lg text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {introSlide === introSlides.length - 1
                  ? "ورود به مداد فکر"
                  : "ادامه"}

                <span className="mr-3" aria-hidden="true">
                  ←
                </span>
              </button>
            </div>
          </section>

          <footer className="pb-4">
            <div className="mx-auto flex max-w-xs gap-2">
              {introSlides.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full transition ${
                    index === introSlide ? "bg-[#2B3A67]" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </footer>
        </div>
      </main>
    );
  }

  /*
   * ATLAS
   */
  if (screen === "atlas") {
    return <AtlasPage onBack={handleBack} onSelectLand={handleSelectLand} />;
  }

  /*
   * LAND
   */
  if (screen === "land" && selectedLandId) {
    const land = getLandById(selectedLandId);

    if (!land) {
      setScreen("atlas");
      return null;
    }

    return (
      <main className="min-h-screen bg-[#F6F1E6] text-[#2B3A67]">
        <div className="mx-auto w-full max-w-5xl px-6 py-8 md:px-10">
          <header className="flex items-center justify-between">
            <button
              onClick={() => navigateTo("atlas")}
              className="text-sm text-slate-400 transition hover:text-[#2B3A67]"
            >
              بازگشت به اطلس
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                <img
                  src="/logo.png"
                  alt="مداد فکر"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="text-xl font-bold">مداد فکر</div>
            </div>
          </header>

          <section className="pb-16 pt-20">
            <div className="mb-6 h-px w-12 bg-[#C1863C]" />

            <div className="text-sm font-medium tracking-wide text-[#C1863C]">
              {land.code}
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.4] md:text-6xl">
              {land.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600 md:text-xl">
              {land.description}
            </p>

            <div className="mt-14">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#2B3A67]">
                  موقعیت‌ها
                </h2>

                <span className="text-sm text-slate-400">
                  {land.situations.length} موقعیت
                </span>
              </div>

              <div className="space-y-3">
                {land.situations.map((situation, index) => (
                  <button
                    key={situation.id}
                    onClick={() => handleSelectSituation(land.id, situation.id)}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-right transition duration-300 hover:-translate-y-0.5 hover:border-[#2B3A67]/20 hover:shadow-md"
                  >
                    <div
                      className="absolute right-0 top-0 h-full w-1 bg-slate-100 transition group-hover:bg-[#C1863C]"
                      aria-hidden="true"
                    />

                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <div className="text-xs font-medium tracking-wide text-[#C1863C]">
                          موقعیت {String(index + 1).padStart(2, "0")}
                        </div>

                        <h3 className="mt-3 text-xl font-semibold leading-9 text-[#2B3A67]">
                          {situation.title}
                        </h3>

                        <p className="mt-2 max-w-3xl text-base leading-8 text-slate-500">
                          {situation.description}
                        </p>
                      </div>

                      <span
                        className="mt-1 shrink-0 text-xl text-slate-300 transition duration-300 group-hover:-translate-x-1 group-hover:text-[#2B3A67]"
                        aria-hidden="true"
                      >
                        ←
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

  /*
   * ACTIVITY
   */
  if (screen === "activity" && selectedLandId && selectedSituationId) {
    const land = getLandById(selectedLandId);

    if (!land) {
      setScreen("atlas");
      return null;
    }

    const situation = land.situations.find(
      (item) => item.id === selectedSituationId,
    );

    if (!situation) {
      setScreen("land");
      return null;
    }

    const situationNumber =
      land.situations.findIndex((item) => item.id === situation.id) + 1;

    return (
      <ActivityPage
        land={land}
        situation={situation}
        situationNumber={situationNumber}
        onBack={handleBack}
        onFinish={() => setScreen("end")}
      />
    );
  }

  /*
   * END
   */
  if (screen === "end") {
    return (
      <EndPage
        onBackToAtlas={handleBack}
        onSupport={() => navigateTo("support")}
      />
    );
  }
  /*
   * SUPPORT
   */
  if (screen === "support") {
    return <SupportPage onBack={handleBack} />;
  }

  /*
   * MAIN
   */
  return (
    <main className="min-h-screen bg-[#F6F1E6] text-[#2B3A67]">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 md:px-10">
        <header className="pt-4">
          <div className="text-xl font-bold">مداد فکر</div>
        </header>

        <section className="flex flex-1 items-center justify-center py-16">
          <div className="w-full max-w-2xl">
            <div className="text-center">
              <div className="mx-auto mb-6 h-px w-12 bg-[#C1863C]" />

              <div className="text-sm font-medium tracking-wide text-[#C1863C]">
                دستیار معلم برای زنگ انشا
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-[1.5] md:text-5xl">
                امروز از کجا شروع کنیم؟
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-9 text-slate-600">
                فعالیتی را برای زنگ انشا انتخاب کنید یا با قابلیت‌های آینده‌ی
                مداد فکر آشنا شوید.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {/* ZANG ENSHA */}
              <button
                onClick={() => navigateTo("atlas")}
                className="group flex w-full items-center justify-between rounded-2xl bg-[#2B3A67] px-7 py-7 text-right text-xl text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div>
                  <div className="text-xl font-semibold">زنگ انشا</div>

                  <div className="mt-1 text-sm text-white/60">
                    انتخاب یک موقعیت برای شروع
                  </div>
                </div>

                <span
                  className="text-xl transition-transform group-hover:-translate-x-1"
                  aria-hidden="true"
                >
                  ←
                </span>
              </button>
              {/* CLASS */}
              <button
                type="button"
                onClick={() => setPremiumFeature("class")}
                className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-7 py-6 text-right transition hover:-translate-y-0.5 hover:border-[#2B3A67]/20 hover:shadow-md"
              >
                <div>
                  <div className="text-xl font-semibold text-[#2B3A67]">
                    کلاس من
                  </div>

                  <div className="mt-2 text-sm text-slate-400">
                    همراهی مداد فکر با کلاس شما در طول زمان
                  </div>
                </div>

                <span className="shrink-0 text-sm text-[#C1863C]">
                  نسخه‌ی آینده
                </span>
              </button>

              {/* ARCHIVE */}
              <button
                type="button"
                onClick={() => setPremiumFeature("archive")}
                className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-7 py-6 text-right transition hover:-translate-y-0.5 hover:border-[#2B3A67]/20 hover:shadow-md"
              >
                <div>
                  <div className="text-xl font-semibold text-[#2B3A67]">
                    آرشیو
                  </div>

                  <div className="mt-2 text-sm text-slate-400">
                    نگه داشتن نوشته‌ها و لحظه‌های ارزشمند فکر کردن
                  </div>
                </div>

                <span className="shrink-0 text-sm text-[#C1863C]">
                  نسخه‌ی آینده
                </span>
              </button>
            </div>
            {premiumFeature && (
              <div
                className="mt-8 rounded-3xl border border-[#2B3A67]/10 bg-white p-7 text-right shadow-sm"
                role="dialog"
                aria-modal="true"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-sm font-medium tracking-wide text-[#C1863C]">
                      نسخه‌ی آینده‌ی مداد فکر
                    </div>

                    <h2 className="mt-3 text-2xl font-bold text-[#2B3A67]">
                      {premiumFeature === "class" ? "کلاس من" : "آرشیو"}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPremiumFeature(null)}
                    className="text-sm text-slate-400 transition hover:text-[#2B3A67]"
                  >
                    بستن
                  </button>
                </div>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  {premiumFeature === "class"
                    ? "نسخه‌ی Premium مداد فکر برای این ساخته می‌شود که ابزار فقط در یک زنگ انشا کنار معلم نباشد؛ بلکه بتواند تجربه‌های یک کلاس را در طول زمان همراهی کند و به معلم کمک کند از میان نوشته‌های دانش‌آموزان، لحظه‌ها و فکرهایی را که ارزش دیده‌شدن و تشویق دارند پیدا کند."
                    : "در میان انبوه نوشته‌های یک کلاس، همیشه چیزهایی هست که ارزش دوباره دیدن دارند. آرشیو نسخه‌ی Premium کمک می‌کند این نوشته‌ها و لحظه‌های ارزشمند از دست نروند و معلم بتواند دوباره به آن‌ها برگردد."}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-sm leading-7 text-slate-400">
                    نسخه‌ی پایلوت عمداً روی تجربه‌ی اصلی زنگ انشا متمرکز شده
                    است. قابلیت‌های گسترده‌تر پس از دریافت و بررسی بازخورد
                    معلمان توسعه پیدا خواهند کرد.
                  </p>
                </div>
              </div>
            )}
            <div className="mt-10 text-center">
              <p className="text-sm leading-7 text-slate-400">
                نسخه‌ی پایلوت بر تجربه‌ی اصلی زنگ انشا تمرکز دارد.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
