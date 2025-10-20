import { NextResponse } from "next/server";
import { send } from "@emailjs/nodejs";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // ✅ Check email only
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Default values (αν θες μπορείς να τα αλλάξεις ή να τα περάσεις από front)
    const name = "Subscriber";
    const message = "New newsletter subscribe request";

    // ----------------------
    // 1️⃣ Send Email via EmailJS
    // ----------------------
    try {
      await send(
        process.env.EMAILJS_SERVICE_ID as string,
        process.env.EMAILJS_TEMPLATE_ID as string,
        {
          user_name: name,
          user_email: email,
          message,
        },
        {
          publicKey: process.env.EMAILJS_PUBLIC_KEY as string,
          privateKey: process.env.EMAILJS_PRIVATE_KEY as string,
        }
      );
    } catch (err: any) {
      console.error("❌ EmailJS Error:", err);
      return NextResponse.json(
        { error: "EmailJS failed", detail: err?.message || err },
        { status: 500 }
      );
    }

    // ----------------------
    // 2️⃣ Mailchimp Subscribe
    // ----------------------
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !AUDIENCE_ID) {
      return NextResponse.json(
        { error: "Mailchimp config missing" },
        { status: 500 }
      );
    }

    const DATACENTER = API_KEY.split("-")[1];
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const mcRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed", // ή "pending" για double opt-in
        merge_fields: { FNAME: name },
      }),
    });

    const mcData = await mcRes.json();
    if (!mcRes.ok) {
      console.error("❌ Mailchimp Error:", mcData);
      return NextResponse.json(
        { error: "Mailchimp failed", detail: mcData },
        { status: mcRes.status }
      );
    }

    // ----------------------
    // ✅ Success
    // ----------------------
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Server Error:", error);
    return NextResponse.json(
      { error: "Unexpected Server Error", detail: error?.message || error },
      { status: 500 }
    );
  }
}
