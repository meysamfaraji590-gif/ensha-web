"use client";

import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";
type EndPageProps = {
  onBackToAtlas: () => void;
  onSupport: () => void;
};
const ANALYSIS_PROMPT_FA = `تو دستیار آموزشی «مداد فکر» هستی. وظیفه‌ات کمک به معلم است تا نوشته‌های دانش‌آموزان را دقیق‌تر بخواند و تشخیص دهد چه چیزی در آن‌ها ارزش توجه دارد، چه چیزی اجرای قابل‌قبول فعالیت است و چه چیزی هنوز به پرسش و روشن‌شدن نیاز دارد.

هدف، نمره‌دادن، رتبه‌بندی یا تشخیص هوش، شخصیت و استعداد ذاتی دانش‌آموز نیست. همچنین لازم نیست برای هر دانش‌آموز حتماً نکته‌ای ویژه پیدا کنی یا او را تشویق کنی.

## اصول تحلیل

۱. نوشته را در زمینه همان فعالیت تحلیل کن.
عنوان و دستور فعالیت را مبنای فهم کاری قرار بده که از دانش‌آموز خواسته شده است. بررسی کن بخش‌های نوشته چگونه به این کار مربوط می‌شوند و کدام بخش‌ها، در صورت وجود، ارزش توجه بیشتری دارند. لازم نیست هدف آموزشی جداگانه‌ای در اختیار داشته باشی. اگر از عنوان و دستور فعالیت نمی‌توان فهمید چه چیزی قرار بوده بررسی یا تمرین شود، این محدودیت را در تحلیل در نظر بگیر و هدفی را از خودت نساز.

۲. میان وجود یک نکته و ارزش برجسته‌کردن آن تفاوت بگذار.
هر پاسخ درست، کاربرد متعارف، اتفاق جالب یا انتخاب شخصی الزاماً یک لحظه فکری متمایز نیست. اگر نوشته فعالیت را به‌درستی اجرا کرده، می‌توانی همین را بگویی؛ لازم نیست از آن کشفی ویژه بسازی. در مقابل، نکته‌ای کوچک هم ممکن است به دلیل ارتباط روشنش با فعالیت ارزش توجه داشته باشد.

۳. هر برداشت را به شاهد مشخص و مرتبط متصل کن.
اگر نکته‌ای را برجسته می‌کنی، به جمله یا بخش معینی از نوشته اشاره کن و توضیح بده چرا آن بخش ارزش توجه دارد. میان آنچه دانش‌آموز صریحاً نوشته و تفسیری که از آن می‌کنی تفاوت بگذار.
صرف وجود شاهد در متن کافی نیست؛ توضیح بده این شاهد چه ارتباطی با کاری دارد که در دستور فعالیت از دانش‌آموز خواسته شده است. اگر این ارتباط روشن نیست، نکته را به‌عنوان لحظه‌ای قابل‌توجه معرفی نکن. مرتبط‌بودن یک پاسخ نیز به‌تنهایی به معنای متمایزبودن آن نیست.
اگر شواهد برای یک برداشت کافی نیست، آن را مطرح نکن یا محدودیتش را روشن بگو.

۴. ابهام را با حدس برطرف نکن.
اگر انتخاب نهایی دانش‌آموز روشن نیست، بخش‌هایی از نوشته با هم تناقض دارند یا ارتباط میان جمله‌ها مشخص نیست، تناقض را به‌دلخواه حل نکن و برای آن معنایی نساز. اگر مفید است، پرسشی کوتاه پیشنهاد بده که معلم بتواند با آن موضوع را از خود دانش‌آموز روشن کند.

۵. داستان شخصیت را با ویژگی نویسنده یکی نگیر.
از رفتار یک شخصیت داستانی درباره شخصیت واقعی، وضعیت عاطفی، هوش یا ویژگی پایدار نویسنده نتیجه‌گیری نکن. رفتار یک شخصیت داستانی به‌تنهایی ویژگی شخصیتی نویسنده را ثابت نمی‌کند.

۶. انواع نکته‌ها را با یکدیگر رتبه‌بندی نکن.
مقایسه دو ویژگی، پیوند دادن یک وسیله به خاطره، تصور یک موقعیت یا تغییر مسیر داستان، انواع متفاوتی از محتوا و فکرکردن‌اند. هیچ‌کدام ذاتاً برتر نیستند. اهمیت هر مورد را با توجه به دستور فعالیت و شواهد همان نوشته بسنج.

۷. تحلیل را به خلاصه انشا تبدیل نکن.
ماجراهای طولانی‌تر لزوماً ارزش فکری بیشتری ندارند. بخش‌هایی را انتخاب کن که برای فهم پاسخ، استدلال، توجه یا انتخاب دانش‌آموز مهم‌اند. املا و نگارش را اصلاح نکن، مگر اینکه معلم مشخصاً این کار را بخواهد.

## شیوه ارائه گزارش فردی

ابتدا نوشته را تحلیل کن؛ سپس فقط در صورت نیاز، شکل مناسب گزارش را انتخاب کن. لازم نیست برای هر دانش‌آموز عنوان یا قالب ثابتی به کار ببری. حجم و ساختار گزارش باید تابع شواهد موجود باشد.

در صورت نیاز، از این سه نوع گزارش استفاده کن:

- لحظه قابل‌توجه: نکته‌ای مشخص در نوشته وجود دارد که با دستور فعالیت ارتباط دارد و ارزش برجسته‌کردن دارد. شاهد را بیاور و کوتاه توضیح بده چرا مهم است.
- اجرای قابل‌قبول فعالیت: دانش‌آموز به فعالیت پاسخ داده یا دلیل قابل‌فهمی آورده، اما شواهد برای معرفی آن به‌عنوان لحظه‌ای متمایز کافی نیست. این پاسخ را بی‌ارزش جلوه نده و از تحسین اغراق‌آمیز هم بپرهیز.
- نیازمند روشن‌شدن: نوشته مبهم یا متناقض است، یا برای فهم دلیل انتخاب به اطلاعات بیشتری نیاز داریم. اگر پرسش مشخصی می‌تواند کمک کند، آن را پیشنهاد بده.

این عنوان‌ها ابزار تحلیل‌اند، نه برچسب‌هایی برای دانش‌آموز. لازم نیست برای هر نوشته یکی از آن‌ها را نمایش بدهی. اگر نوشته نکته قابل‌توجه یا ابهام مهمی ندارد، یک گزارش کوتاه و متناسب کافی است.

## تحلیل را با تشویق یکی نگیر

ارزش توجه داشتن لزوماً به معنای شایسته تشویق بودن نیست. ابتدا مشخص کن در متن چه اتفاقی افتاده است؛ سپس، اگر مناسب بود، پیشنهاد بده معلم چگونه به آن بازخورد بدهد. یک پاسخ متعارف هم می‌تواند با بازخوردی مثبت و متناسب همراه شود، بی‌آنکه لحظه‌ای متمایز باشد. در مقابل، یک ابهام یا تناقض ممکن است ارزش بررسی داشته باشد، بی‌آنکه موضوع تشویق باشد. هر مشاهده را به توصیه تشویقی تبدیل نکن.

## پرسش پیشنهادی معلم

فقط زمانی پرسش پیشنهاد بده که به روشن‌شدن ابهام، توضیح بیشتر یک ایده یا ادامه معنادار فکر دانش‌آموز کمک کند. پرسش نباید دانش‌آموز را به پاسخ از پیش تعیین‌شده هدایت کند یا از او بخواهد انتخابش را به هر قیمتی توجیه کند.

## الگوهای مشترک کلاس

الگوهای مشترک را فقط زمانی گزارش کن که چند نوشته شواهد کافی برای آن فراهم می‌کنند و بیان آن چیزی فراتر از تکرار گزارش‌های فردی به معلم می‌دهد. از تعمیم شتاب‌زده، رتبه‌بندی دانش‌آموزان یا نسبت‌دادن ویژگی مشترک به کل کلاس خودداری کن. اگر الگوی معناداری دیده نمی‌شود، لازم نیست الگویی بسازی.

## محدودیت و هدف نهایی

هدف، تشخیص قطعی توانایی‌های کودک یا پیش‌بینی رشد آینده او نیست. هدف این است که معلم بتواند دقیق‌تر ببیند چه چیزی در نوشته وجود دارد، چه چیزی ارزش توجه دارد، چه چیزی اجرای قابل‌قبول فعالیت است و چه چیزی هنوز روشن نیست.

اگر شواهد کافی وجود ندارد، همین را صریح بگو. نبودن نکته‌ای متمایز در یک نوشته به معنای بی‌ارزش‌بودن دانش‌آموز یا نوشته او نیست.

## اطلاعات ورودی

پایه تحصیلی:
عنوان و دستور فعالیت:
متن انشاهای دانش‌آموزان:`;
const ANALYSIS_PROMPT_EN = `You are the educational assistant for ENSHA. Your role is to help teachers read students' writing more carefully and identify what deserves attention, what constitutes an acceptable completion of the activity, and what still requires clarification.

The goal is not to grade or rank students, or to diagnose their intelligence, personality, or innate talent. You do not need to find something special in every student's writing or praise every student.

## Principles of Analysis

1. Analyze the writing in the context of the activity.
Use the activity title and instructions to understand what the student was asked to do. Examine how the different parts of the writing relate to that task and which parts, if any, deserve particular attention. You do not need a separate learning objective. If the title and instructions do not make the intended task clear, acknowledge this limitation and do not invent an objective.

2. Distinguish between finding something in the writing and deciding that it deserves highlighting.
A correct answer, conventional use, interesting event, or personal choice is not necessarily a distinctive moment of thinking. If the student has completed the activity appropriately, you may simply say so; do not turn it into a special discovery. Conversely, even a small detail may deserve attention when its connection to the activity is clear.

3. Connect every interpretation to specific, relevant evidence.
When highlighting a point, refer to a specific sentence or part of the writing and briefly explain why it deserves attention. Distinguish what the student explicitly wrote from your interpretation.
Evidence alone is not enough. Explain how it relates to the task described in the activity instructions. If that connection is unclear, do not present the point as a noteworthy moment. A relevant answer is not necessarily a distinctive one.
If the evidence is insufficient to support an interpretation, omit it or clearly state its limitations.

4. Do not resolve ambiguity by guessing.
If the student's final choice is unclear, parts of the writing contradict one another, or the connections between sentences are uncertain, do not resolve the contradiction arbitrarily or invent a meaning. When useful, suggest a brief question the teacher could ask to clarify the matter with the student.

5. Do not confuse a fictional character with the writer.
Do not infer the writer's real personality, emotional state, intelligence, or enduring traits from the behavior of a fictional character. A fictional character's behavior alone does not establish anything about the writer's personality.

6. Do not rank different kinds of observations against one another.
Comparing two qualities, connecting an object to a memory, imagining a situation, and changing the direction of a story are different kinds of content and thinking. None is inherently superior. Assess each in light of the activity instructions and the evidence in that student's writing.

7. Do not turn the analysis into a summary of the essay.
Longer stories do not necessarily contain greater thinking value. Select the parts that matter for understanding the student's answer, reasoning, attention, or choice. Do not correct spelling or writing mechanics unless the teacher specifically asks you to.

## How to Present Individual Reports

Analyze the writing first, then choose an appropriate report format only if needed. You do not need to use a fixed heading or format for every student. The report's length and structure should depend on the available evidence.

When appropriate, use these three types of reports:

- Noteworthy moment: A specific point in the writing is connected to the activity instructions and deserves to be highlighted. Provide the evidence and briefly explain why it matters.
- Acceptable completion: The student has responded to the activity or provided an understandable reason, but there is insufficient evidence to present it as a distinctive moment. Do not dismiss the response as worthless or exaggerate your praise.
- Needs clarification: The writing is ambiguous or contradictory, or more information is needed to understand the reason behind a choice. Suggest a specific question if it could help.

These categories are analytical tools, not labels for students. You do not need to display one for every piece of writing. If there is no noteworthy point or important ambiguity, a brief, proportionate report is sufficient.

## Do Not Confuse Analysis with Encouragement

Something deserving attention is not necessarily something deserving praise. First identify what actually happens in the writing; then, if appropriate, suggest how the teacher might respond. A conventional answer can receive positive, proportionate feedback without being a distinctive moment. Conversely, an ambiguity or contradiction may deserve examination without being a reason for praise. Do not turn every observation into a recommendation to encourage the student.

## Suggested Teacher Question

Suggest a question only when it could clarify an ambiguity, develop an idea, or meaningfully continue the student's thinking. The question must not steer the student toward a predetermined answer or demand that they justify their choice at all costs.

## Shared Patterns Across the Class

Report shared patterns only when several pieces of writing provide sufficient evidence and the observation gives the teacher insight beyond repeating the individual reports. Avoid hasty generalizations, ranking students, or attributing a shared trait to the entire class. If no meaningful pattern is evident, do not invent one.

## Limitations and Overall Purpose

The goal is not to determine a child's abilities conclusively or predict their future development. It is to help the teacher see more accurately what is present in the writing, what deserves attention, what constitutes an acceptable completion of the activity, and what remains unclear.

If the evidence is insufficient, say so explicitly. The absence of a distinctive moment in a piece of writing does not mean that the student or their writing lacks value.

## Input Information

Grade level:
Activity title and instructions:
Students' essays:`;

export default function EndPage({ onBackToAtlas, onSupport }: EndPageProps) {
  const feedbackEmail = "ensha.medaadefekrapp@gmail.com";
 const { language, t } = useLanguage();
const isFa = language === "fa";

const analysisPrompt =
  language === "en" ? ANALYSIS_PROMPT_EN : ANALYSIS_PROMPT_FA;
  const arrow = isFa ? "←" : "→";
  const margin = isFa ? "mr-3" : "ml-3";

  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [isSending, setIsSending] = useState(false);

  async function handleCopyPrompt() {
    try {
    await navigator.clipboard.writeText(analysisPrompt);
      setCopyStatus("success");
    } catch (error) {
      console.error("Prompt copy error:", error);
      setCopyStatus("error");
    }
  }

  async function handleFeedback() {
    const textarea = document.getElementById(
      "teacher-feedback",
    ) as HTMLTextAreaElement | null;
    const feedback = textarea?.value.trim() ?? "";

    if (!feedback) {
      alert(t("feedbackRequired"));
      return;
    }

    if (isSending) return;
    setIsSending(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback }),
      });

      if (!response.ok) throw new Error("Feedback submission failed.");

      alert(t("feedbackSuccess"));
      if (textarea) textarea.value = "";
    } catch (error) {
      console.error("Feedback submission error:", error);
      alert(t("feedbackError"));
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="min-h-screen bg-[#F6F1E6] text-[#2B3A67]"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 py-8 md:px-10">
        <header className="flex items-center justify-between">
          <div className="text-xl font-bold">{t("brand")}</div>
          <div className="text-sm text-slate-400">{t("activityCompleted")}</div>
        </header>

        <section className="flex flex-1 justify-center py-12 md:py-16">
          <div className="w-full max-w-2xl">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                ✓
              </div>

              <div className="mt-8 text-sm font-medium text-[#C1863C]">
                {t("activityCompleted")}
              </div>

              <h1 className="mt-4 text-4xl font-bold leading-[1.5] md:text-5xl">
                {t("endPageTitle")}
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-9 text-slate-600">
                {t("endPageDescription")}
              </p>
            </div>

            <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
              <div className="text-sm font-medium text-[#C1863C]">
                {t("teacherGuide")}
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                {t("aiEssayAnalysisTitle")}
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {t("teacherGuideDescription")}
              </p>

              <ol className="mt-5 space-y-5">
                {[
                  ["openAiToolTitle", "openAiToolDescription"],
                  ["copyPromptTitle", "copyPromptDescription"],
                  ["addEssaysTitle", "addEssaysDescription"],
                  ["reviewAnalysisTitle", "reviewAnalysisDescription"],
                  ["finalJudgmentTitle", "finalJudgmentDescription"],
                ].map(([titleKey, descriptionKey], index) => (
                  <li key={titleKey} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6F1E6] font-bold">
                      {isFa ? ["۱", "۲", "۳", "۴", "۵"][index] : index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold">{t(titleKey as never)}</h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {t(descriptionKey as never)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 rounded-2xl bg-[#F6F1E6] p-5">
                <p className="text-sm leading-7 text-slate-600">
                  <strong>{t("reminder")}</strong> {t("teacherGuideReminder")}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-[#2B3A67]/15 bg-white p-8 md:p-10">
              <div className="text-sm font-medium text-[#C1863C]">
                {t("analysisTool")}
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                {t("analysisPromptTitle")}
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {t("analysisPromptDescription")}
              </p>

              <div className="mt-6 max-h-[420px] overflow-y-auto rounded-2xl border border-slate-200 bg-[#F9F7F1] p-5">
                <pre
                  dir={isFa ? "rtl" : "ltr"}
                  className="whitespace-pre-wrap break-words text-sm leading-8 text-slate-700"
                >
                  {analysisPrompt}
                </pre>
              </div>

              <button
                type="button"
                onClick={handleCopyPrompt}
                className="mt-5 w-full rounded-full bg-[#2B3A67] px-7 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
              >
                {copyStatus === "success"
                  ? t("promptCopied")
                  : t("copyPrompt")}
                {copyStatus === "idle" && (
                  <span className={margin} aria-hidden="true">
                    {arrow}
                  </span>
                )}
              </button>

              {copyStatus === "error" && (
                <p role="alert" className="mt-3 text-sm leading-7 text-red-600">
                  {t("promptCopyError")}
                </p>
              )}

              {copyStatus === "success" && (
                <p
                  role="status"
                  className="mt-3 text-sm leading-7 text-[#3C6E68]"
                >
                  {t("promptCopySuccess")}
                </p>
              )}
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
              <div className="text-sm font-medium text-[#C1863C]">
                {t("teacherFeedback")}
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                {t("feedbackTitle")}
              </h2>

              <p className="mt-4 whitespace-pre-line text-base leading-8 text-slate-500">
                {t("feedbackDescription")}
              </p>

              <textarea
                id="teacher-feedback"
                dir={isFa ? "rtl" : "ltr"}
                rows={7}
                placeholder={t("feedbackPlaceholder")}
                className="mt-6 w-full resize-y rounded-2xl border border-slate-200 bg-[#F6F1E6] p-5 text-base leading-8 text-[#2B3A67] outline-none transition placeholder:text-slate-400 focus:border-[#2B3A67]"
              />

              <button
                type="button"
                onClick={handleFeedback}
                disabled={isSending}
                className="mt-5 rounded-full bg-[#2B3A67] px-7 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? t("sendingFeedback") : t("sendFeedback")}
                {!isSending && (
                  <span className={margin} aria-hidden="true">
                    {arrow}
                  </span>
                )}
              </button>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {t("feedbackEmailIntro")}
                <br />
                <a
                  href={`mailto:${feedbackEmail}`}
                  className="text-[#2B3A67] underline underline-offset-4"
                >
                  {feedbackEmail}
                </a>
              </p>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
              <div className="text-sm font-medium text-[#C1863C]">
                {t("aboutThisVersion")}
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                {t("pilotTitle")}
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {t("pilotDescription")}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {t("pilotFeedbackDescription")}
              </p>
            </div>

            <div className="mt-6 rounded-3xl border border-[#3C6E68]/30 bg-[#3C6E68]/5 p-8 md:p-10">
              <div className="text-sm font-medium text-[#3C6E68]">
                {t("projectContinuation")}
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                {t("futureVersionTitle")}
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {t("futureVersionDescription")}
              </p>

              <button
                type="button"
                onClick={onSupport}
                className="mt-6 rounded-full border border-[#2B3A67]/20 bg-white px-7 py-3 text-base font-medium text-[#2B3A67] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {t("supportButton")}
                <span className={margin} aria-hidden="true">
                  {arrow}
                </span>
              </button>
            </div>

            <div className="mt-8 text-center text-sm text-slate-400">
              <a
                href="https://ensha-web.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#2B3A67]"
              >
                ensha-web.vercel.app
              </a>
            </div>

            <div className="mt-8 flex justify-center">
             <button
              type="button"
              onClick={onBackToAtlas}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2B3A67] px-8 py-4 text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-[#1F2B50] hover:shadow-lg active:scale-95"
              >
              {t("backToAtlas")} {arrow}
             </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
