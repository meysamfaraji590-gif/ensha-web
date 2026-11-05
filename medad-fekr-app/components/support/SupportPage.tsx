"use client";

import { useLanguage } from "../../i18n/LanguageProvider";

type SupportPageProps = {
  onBack: () => void;
};

export default function SupportPage({ onBack }: SupportPageProps) {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F6F1E6] text-[#2B3A67]">
      <div className="mx-auto w-full max-w-4xl px-6 py-8 md:px-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-sm text-slate-400 transition hover:text-[#2B3A67]"
          >
            {t("back")}
          </button>

          <div className="text-xl font-bold">{t("brand")}</div>
        </header>

        {/* Hero */}
        <section className="pb-14 pt-20">
          <div className="max-w-3xl">
            <div className="mb-6 h-px w-12 bg-[#C1863C]" />

            <div className="text-sm font-medium text-[#C1863C]">
              {t("supportPageEyebrow")}
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.45] md:text-6xl">
              {t("supportPageTitleLine1")}
              <br />
              {t("supportPageTitleLine2")}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-600 md:text-xl">
              {t("supportPageIntro")}
            </p>
          </div>
        </section>

        {/* Why pilot */}
        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
            <div className="text-sm font-medium text-[#C1863C]">
              {t("whyPilotEyebrow")}
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              {t("whyPilotTitle")}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {t("whyPilotDescription")}
            </p>
          </div>

          {/* Official version */}
          <div className="rounded-3xl bg-[#2B3A67] p-8 text-white md:p-10">
            <div className="text-sm font-medium text-[#C1863C]">{t("nextStepEyebrow")}</div>

            <h2 className="mt-4 text-2xl font-bold md:text-3xl">
              {t("officialVersionTitle")}
            </h2>

            <p className="mt-5 text-base leading-8 text-white/80">
              {t("officialVersionDescription")}
            </p>

            <p className="mt-4 text-base leading-8 text-white/80">
              {t("officialFeaturesDescription")}
            </p>
          </div>

          {/* Support options */}
          <div className="rounded-3xl border border-[#C1863C]/30 bg-[#C1863C]/5 p-8 md:p-10">
            <div className="text-sm font-medium text-[#C1863C]">
              {t("howToSupportEyebrow")}
            </div>

            <h2 className="mt-4 text-2xl font-bold">{t("supportNotOnlyFinancial")}</h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              <p>
                <strong className="text-[#2B3A67]">{t("supportByUsingAndFeedback")}</strong>{" "}
                {t("supportByUsingAndFeedbackDescription")}
              </p>

              <p>
                <strong className="text-[#2B3A67]">{t("supportBySharing")}</strong>{" "}
                {t("supportBySharingDescription")}
              </p>

              <p>
                <strong className="text-[#2B3A67]">{t("financialSupport")}</strong>{" "}
                {t("financialSupportDescription")}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center md:p-10">
            <h2 className="text-2xl font-bold">{t("learnMoreAboutEnsha")}</h2>

            <p className="mt-4 text-base leading-8 text-slate-500">
              {t("followProjectDescription")}
            </p>

            <a
              href="https://ensha-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-lg font-medium text-[#2B3A67] underline underline-offset-4"
            >
              ensha-web.vercel.app
            </a>

            <p className="mt-6 text-sm text-slate-400">{t("contactUs")}</p>

            <div className="mt-3 flex flex-col items-center gap-3">
              <a
                href="mailto:ensha.medaadefekrapp@gmail.com"
                className="text-sm text-[#2B3A67]"
              >
                ensha.medaadefekrapp@gmail.com
              </a>

              <a
                href="tel:09386705922"
                dir="ltr"
                className="text-sm text-[#2B3A67]"
              >
                09386705922
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-sm text-slate-400">
          {t("supportPageFooter")}
        </footer>
      </div>
    </main>
  );
}
