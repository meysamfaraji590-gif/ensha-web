import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const feedback =
      typeof body.feedback === "string" ? body.feedback.trim() : "";

    if (!feedback) {
      return Response.json({ error: "متن بازخورد خالی است." }, { status: 400 });
    }

    if (feedback.length > 5000) {
      return Response.json(
        { error: "متن بازخورد بیش از حد طولانی است." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "مداد فکر <onboarding@resend.dev>",
      to: ["ensha.medaadefekrapp@gmail.com"],
      subject: "بازخورد جدید مداد فکر",
      text: feedback,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "ارسال بازخورد انجام نشد." },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Feedback API error:", error);

    return Response.json(
      { error: "خطایی در پردازش بازخورد رخ داد." },
      { status: 500 },
    );
  }
}
