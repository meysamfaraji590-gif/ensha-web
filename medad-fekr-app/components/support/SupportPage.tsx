"use client";

type SupportPageProps = {
  onBack: () => void;
};

export default function SupportPage({ onBack }: SupportPageProps) {
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

        {/* Hero */}
        <section className="pb-14 pt-20">
          <div className="max-w-3xl">
            <div className="mb-6 h-px w-12 bg-[#C1863C]" />

            <div className="text-sm font-medium text-[#C1863C]">
              حمایت از مداد فکر
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.45] md:text-6xl">
              نسخه‌ای که امروز می‌بینید،
              <br />
              پایان راه نیست.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-600 md:text-xl">
              مداد فکر در حال حاضر در مرحله‌ی پایلوت است؛ نسخه‌ای که برای
              استفاده‌ی واقعی معلمان ساخته شده تا پیش از ساخت نسخه‌ی رسمی،
              تجربه‌ها و بازخوردهای واقعی کلاس را بشناسیم.
            </p>
          </div>
        </section>

        {/* Why pilot */}
        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
            <div className="text-sm font-medium text-[#C1863C]">
              چرا پایلوت؟
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              چون یک ابزار آموزشی باید پیش از کامل شدن، در کلاس آزموده شود.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              نسخه‌ی فعلی قرار است در طول یک سال توسط معلمان استفاده شود.
              تجربه‌ی اجرای فعالیت‌ها، واکنش دانش‌آموزان، نقاط قوت و ضعف
              فعالیت‌ها و پیشنهادهای معلمان، مبنای بازنویسی و توسعه‌ی مداد فکر
              خواهد بود.
            </p>
          </div>

          {/* Official version */}
          <div className="rounded-3xl bg-[#2B3A67] p-8 text-white md:p-10">
            <div className="text-sm font-medium text-[#C1863C]">گام بعدی</div>

            <h2 className="mt-4 text-2xl font-bold md:text-3xl">
              ساخت نسخه‌ی رسمی اولیه
            </h2>

            <p className="mt-5 text-base leading-8 text-white/80">
              برای تبدیل این تجربه‌ی یک‌ساله به یک محصول آموزشی با کیفیت بالاتر،
              به امکانات و یک تیم برنامه‌نویسی حرفه‌ای‌تر نیاز خواهیم داشت.
            </p>

            <p className="mt-4 text-base leading-8 text-white/80">
              هدف این است که نسخه‌ی رسمی بتواند در کنار بانک فعالیت‌ها، امکاناتی
              مانند مدیریت کلاس، آرشیو، شناخت بهتر نوشته‌های دانش‌آموزان و
              ابزارهای هوشمند پشتیبان معلم را نیز با کیفیت و پایداری بیشتری
              ارائه کند.
            </p>
          </div>

          {/* Support options */}
          <div className="rounded-3xl border border-[#C1863C]/30 bg-[#C1863C]/5 p-8 md:p-10">
            <div className="text-sm font-medium text-[#C1863C]">
              چگونه می‌توانید کمک کنید؟
            </div>

            <h2 className="mt-4 text-2xl font-bold">حمایت فقط مالی نیست.</h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              <p>
                <strong className="text-[#2B3A67]">استفاده و بازخورد:</strong>{" "}
                اگر معلم هستید، نسخه‌ی پایلوت را در کلاس اجرا کنید و تجربه‌تان
                را با ما در میان بگذارید.
              </p>

              <p>
                <strong className="text-[#2B3A67]">معرفی:</strong> اگر معلم
                دیگری را می‌شناسید که ممکن است مداد فکر برای او مفید باشد،
                نسخه‌ی پایلوت را به او معرفی کنید.
              </p>

              <p>
                <strong className="text-[#2B3A67]">حمایت مالی:</strong> اگر
                مایلید در تأمین هزینه‌های توسعه‌ی نسخه‌ی رسمی سهیم باشید،
                می‌توانید برای هماهنگی با ما تماس بگیرید.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center md:p-10">
            <h2 className="text-2xl font-bold">مداد فکر را بیشتر بشناسید</h2>

            <p className="mt-4 text-base leading-8 text-slate-500">
              برای آشنایی بیشتر با پروژه و دنبال کردن روند توسعه:
            </p>

            <a
              href="https://ensha-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-lg font-medium text-[#2B3A67] underline underline-offset-4"
            >
              ensha-web.vercel.app
            </a>

            <p className="mt-6 text-sm text-slate-400">ارتباط با ما:</p>

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
          مداد فکر · برای بهتر شدن زنگ انشا
        </footer>
      </div>
    </main>
  );
}
