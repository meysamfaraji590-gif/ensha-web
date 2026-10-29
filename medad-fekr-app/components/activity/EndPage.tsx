"use client";

import { useState } from "react";

type EndPageProps = {
  onBackToAtlas: () => void;
  onSupport: () => void;
};

const ANALYSIS_PROMPT = `تو دستیار آموزشی «مداد فکر» هستی. وظیفه‌ات کمک به معلم است تا نوشته‌های دانش‌آموزان را دقیق‌تر بخواند و تشخیص دهد چه چیزی در آن‌ها ارزش توجه دارد، چه چیزی اجرای قابل‌قبول فعالیت است و چه چیزی هنوز به پرسش و روشن‌شدن نیاز دارد.

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

export default function EndPage({ onBackToAtlas, onSupport }: EndPageProps) {
  const feedbackEmail = "ensha.medaadefekrapp@gmail.com";

  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const [isSending, setIsSending] = useState(false);

  async function handleCopyPrompt() {
    try {
      await navigator.clipboard.writeText(ANALYSIS_PROMPT);
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
      alert("لطفاً ابتدا بازخورد خود را بنویسید.");
      return;
    }

    if (isSending) return;

    setIsSending(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      });

      if (!response.ok) {
        throw new Error("ارسال بازخورد ناموفق بود.");
      }

      alert("بازخورد شما با موفقیت ارسال شد.");

      if (textarea) {
        textarea.value = "";
      }
    } catch (error) {
      console.error("Feedback submission error:", error);
      alert("ارسال بازخورد انجام نشد. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#F6F1E6] text-[#2B3A67]">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 py-8 md:px-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="text-xl font-bold">مداد فکر</div>
          <div className="text-sm text-slate-400">پایان فعالیت</div>
        </header>

        <section className="flex flex-1 justify-center py-12 md:py-16">
          <div className="w-full max-w-2xl">
            {/* Completion */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                ✓
              </div>

              <div className="mt-8 text-sm font-medium text-[#C1863C]">
                فعالیت به پایان رسید
              </div>

              <h1 className="mt-4 text-4xl font-bold leading-[1.5] md:text-5xl">
                چه چیزی در نوشته‌ها دیدید؟
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-9 text-slate-600">
                مداد فکر قرار نیست در هر انشا حتماً نکته‌ای ویژه پیدا کند. هدف
                این است که به خواندن دقیق‌تر نوشته‌ها کمک کند؛ به دیدن نکته‌هایی
                که ارزش توجه دارند، تشخیص پاسخ‌های متعارف و مشخص‌کردن جاهایی که
                هنوز به پرسش و روشن‌شدن نیاز دارند.
              </p>
            </div>

            {/* Teacher Guide */}
            <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
              <div className="text-sm font-medium text-[#C1863C]">
                راهنمای معلم
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                چطور با کمک هوش مصنوعی انشاها را تحلیل کنید؟
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                برای استفاده از پرامپت مداد فکر، مراحل زیر را دنبال کنید. برای
                این کار به دانش فنی خاصی نیاز ندارید.
              </p>

              <ol className="mt-5 space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6F1E6] font-bold">
                    ۱
                  </span>
                  <div>
                    <h3 className="font-bold">یک ابزار هوش مصنوعی باز کنید</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      از ابزاری استفاده کنید که امکان واردکردن متن و دریافت پاسخ
                      را داشته باشد.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6F1E6] font-bold">
                    ۲
                  </span>
                  <div>
                    <h3 className="font-bold">پرامپت مداد فکر را کپی کنید</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      از بخش پایین، متن پرامپت را کپی و در گفت‌وگوی هوش مصنوعی
                      وارد کنید.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6F1E6] font-bold">
                    ۳
                  </span>
                  <div>
                    <h3 className="font-bold">
                      دستور فعالیت و انشاها را اضافه کنید
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      پایه تحصیلی، عنوان و دستور فعالیت و متن انشاها را در قسمت
                      مشخص‌شده وارد کنید. نیازی نیست هدف آموزشی جداگانه‌ای تعریف
                      کنید. اگر نام دانش‌آموزان برای تحلیل ضروری نیست، از نام
                      کامل و اطلاعات هویتی آن‌ها استفاده نکنید.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6F1E6] font-bold">
                    ۴
                  </span>
                  <div>
                    <h3 className="font-bold">تحلیل را با دقت بررسی کنید</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      بررسی کنید مدل چه نکته‌ای را برجسته کرده، آیا شاهد مشخصی
                      آورده، آیا آن نکته به دستور فعالیت مربوط است و آیا چیزی را
                      بیش از شواهد موجود نتیجه گرفته است.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6F1E6] font-bold">
                    ۵
                  </span>
                  <div>
                    <h3 className="font-bold">قضاوت نهایی با شماست</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      پاسخ هوش مصنوعی را یک پیشنهاد برای خواندن دقیق‌تر بدانید،
                      نه داوری قطعی درباره دانش‌آموز. اگر برداشت مدل با متن
                      سازگار نیست، آن را نپذیرید.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="mt-6 rounded-2xl bg-[#F6F1E6] p-5">
                <p className="text-sm leading-7 text-slate-600">
                  <strong>یادآوری:</strong> لازم نیست هر انشا نکته‌ای متمایز
                  داشته باشد. یک پاسخ متعارف می‌تواند پاسخ قابل‌قبولی باشد؛ و یک
                  ابهام ممکن است فقط به پرسشی برای روشن‌شدن نیاز داشته باشد، نه
                  تشویق یا تفسیر بیشتر.
                </p>
              </div>
            </div>

            {/* Prompt */}
            <div className="mt-6 rounded-3xl border border-[#2B3A67]/15 bg-white p-8 md:p-10">
              <div className="text-sm font-medium text-[#C1863C]">
                ابزار تحلیل
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                پرامپت تحلیل انشا به روش مداد فکر
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                این متن را کپی کنید و در ابزار هوش مصنوعی قرار دهید. سپس اطلاعات
                فعالیت و انشاهای دانش‌آموزان را در بخش ورودی اضافه کنید.
              </p>

              <div className="mt-6 max-h-[420px] overflow-y-auto rounded-2xl border border-slate-200 bg-[#F9F7F1] p-5">
                <pre className="whitespace-pre-wrap break-words text-sm leading-8 text-slate-700">
                  {ANALYSIS_PROMPT}
                </pre>
              </div>

              <button
                type="button"
                onClick={handleCopyPrompt}
                className="mt-5 w-full rounded-full bg-[#2B3A67] px-7 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
              >
                {copyStatus === "success" ? "پرامپت کپی شد ✓" : "کپی پرامپت"}
                {copyStatus === "idle" && (
                  <span className="mr-3" aria-hidden="true">
                    ←
                  </span>
                )}
              </button>

              {copyStatus === "error" && (
                <p role="alert" className="mt-3 text-sm leading-7 text-red-600">
                  کپی خودکار انجام نشد. متن بالا را انتخاب و به‌صورت دستی کپی
                  کنید. برای استفاده از کپی خودکار، صفحه باید در محیط امن مرورگر
                  باز شده باشد.
                </p>
              )}

              {copyStatus === "success" && (
                <p
                  role="status"
                  className="mt-3 text-sm leading-7 text-[#3C6E68]"
                >
                  متن پرامپت در کلیپ‌بورد قرار گرفت. اکنون می‌توانید آن را در
                  ابزار هوش مصنوعی جای‌گذاری کنید.
                </p>
              )}
            </div>

            {/* Feedback */}
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
              <div className="text-sm font-medium text-[#C1863C]">
                بازخورد معلم
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                تحلیل‌ها چقدر به خواندن دقیق‌تر کمک کردند؟
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-500">
                اگر تحلیل‌ها را بررسی کردید، برای ما بنویسید: آیا مدل نکته مهمی
                را درست تشخیص داد؟ آیا نکته‌ای کم‌اهمیت را بیش از اندازه برجسته
                کرد یا چیزی مهم را ندید؟ آیا در جایی از متن بیش از شواهد موجود
                نتیجه گرفت؟ آیا ابهامی را درست تشخیص داد یا خودش برای آن معنایی
                ساخت؟
                <br />
                <br />
                لازم نیست به همه این پرسش‌ها پاسخ دهید. یک نمونه مشخص از تحلیل
                درست یا اشتباه برای ما مفید است.
              </p>

              <textarea
                id="teacher-feedback"
                rows={7}
                placeholder="مثلاً: مدل این بخش از انشا را برجسته کرد، اما به نظرم بخش دیگری ارتباط بیشتری با دستور فعالیت داشت..."
                className="mt-6 w-full resize-y rounded-2xl border border-slate-200 bg-[#F6F1E6] p-5 text-base leading-8 text-[#2B3A67] outline-none transition placeholder:text-slate-400 focus:border-[#2B3A67]"
              />

              <button
                type="button"
                onClick={handleFeedback}
                disabled={isSending}
                className="mt-5 rounded-full bg-[#2B3A67] px-7 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "در حال ارسال..." : "ارسال بازخورد"}
                {!isSending && (
                  <span className="mr-3" aria-hidden="true">
                    ←
                  </span>
                )}
              </button>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                یا مستقیماً برای ما بنویسید:
                <br />
                <a
                  href={`mailto:${feedbackEmail}`}
                  className="text-[#2B3A67] underline underline-offset-4"
                >
                  {feedbackEmail}
                </a>
              </p>
            </div>

            {/* About Pilot */}
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
              <div className="text-sm font-medium text-[#C1863C]">
                درباره این نسخه
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                مداد فکر در حال آزموده‌شدن است.
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                مداد فکر برای کمک به معلم در خواندن نوشته‌های دانش‌آموزان طراحی
                شده است؛ نه برای نمره‌دادن، رتبه‌بندی یا نتیجه‌گیری قطعی درباره
                توانایی و شخصیت کودکان.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                در این مرحله، می‌خواهیم با اجرای فعالیت‌ها و بررسی تحلیل‌ها
                بفهمیم مدل کجا به معلم کمک می‌کند، کجا نکته نامناسبی را برجسته
                می‌کند و کجا نمی‌تواند میان شواهد مهم و کم‌اهمیت تمایز بگذارد.
                اصلاحات بعدی باید بر اساس همین تجربه‌ها انجام شوند، نه صرفاً با
                افزودن دستورهای بیشتر به مدل.
              </p>
            </div>

            {/* Support */}
            <div className="mt-6 rounded-3xl border border-[#3C6E68]/30 bg-[#3C6E68]/5 p-8 md:p-10">
              <div className="text-sm font-medium text-[#3C6E68]">
                ادامه پروژه
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                در شکل‌گرفتن نسخه آینده سهیم باشید.
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                اگر فکر می‌کنید این رویکرد می‌تواند به تجربه زنگ انشا کمک کند،
                می‌توانید درباره پروژه بیشتر بدانید، آن را به معلمان دیگر معرفی
                کنید یا درباره ادامه آن با ما در ارتباط باشید.
              </p>

              <button
                type="button"
                onClick={onSupport}
                className="mt-6 rounded-full border border-[#2B3A67]/20 bg-white px-7 py-3 text-base font-medium text-[#2B3A67] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                درباره حمایت از مداد فکر
                <span className="mr-3" aria-hidden="true">
                  ←
                </span>
              </button>
            </div>

            {/* Links */}
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

            {/* Back */}
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={onBackToAtlas}
                className="text-sm text-slate-400 transition hover:text-[#2B3A67]"
              >
                بازگشت به اطلس ←
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
