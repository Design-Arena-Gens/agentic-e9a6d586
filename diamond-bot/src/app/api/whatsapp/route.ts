import crypto from "node:crypto";

import { createWhatsAppReply, renderTwimlMessage } from "@/lib/diamondChatbot";

export const runtime = "nodejs";

const twilioSignatureHeader = "x-twilio-signature";

const isSignatureEnabled = Boolean(process.env.TWILIO_AUTH_TOKEN);

function validateSignature(request: Request, formData: URLSearchParams) {
  if (!isSignatureEnabled) {
    return true;
  }

  const headerSignature = request.headers.get(twilioSignatureHeader);
  const authToken = process.env.TWILIO_AUTH_TOKEN ?? "";
  const rawUrl = request.url;
  const url =
    process.env.NEXT_PUBLIC_BASE_URL && request.url.startsWith("http")
      ? `${process.env.NEXT_PUBLIC_BASE_URL}${new URL(request.url).pathname}`
      : rawUrl;

  if (!headerSignature || !authToken || !url) {
    return false;
  }

  const sortedPairs = Array.from(formData.entries()).sort(([a], [b]) =>
    a.localeCompare(b),
  );

  const concatenated = sortedPairs.reduce(
    (accumulator, [key, value]) => accumulator + key + value,
    url,
  );

  const expectedSignature = crypto
    .createHmac("sha1", authToken)
    .update(Buffer.from(concatenated, "utf8"))
    .digest("base64");

  const expected = Buffer.from(expectedSignature);
  const received = Buffer.from(headerSignature);

  if (expected.length !== received.length) {
    return false;
  }

  return crypto.timingSafeEqual(expected, received);
}

export async function POST(request: Request) {
  try {
    const formEntries: string[][] = [];
    const formData = await request.clone().formData();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        formEntries.push([key, value]);
      }
    });

    const encodedBody = new URLSearchParams(formEntries);

    if (!validateSignature(request, encodedBody)) {
      return new Response("Invalid signature", { status: 401 });
    }

    const rawBody = encodedBody.get("Body") ?? "";
    const profileName =
      encodedBody.get("ProfileName") ?? encodedBody.get("WaId") ?? undefined;
    const fromNumber = encodedBody.get("From") ?? undefined;

    const responseMessage = createWhatsAppReply(rawBody, {
      profileName: profileName || undefined,
      fromNumber,
    });

    return new Response(renderTwimlMessage(responseMessage), {
      headers: {
        "Content-Type": "text/xml",
      },
    });
  } catch (error) {
    console.error("WhatsApp webhook error:", error);
    return new Response(
      renderTwimlMessage(
        "Our concierge momentarily stepped away. Please resend your message and we'll be right with you.",
      ),
      {
        headers: { "Content-Type": "text/xml" },
        status: 500,
      },
    );
  }
}

export function GET() {
  const docsUrl = "https://agentic-e9a6d586.vercel.app";
  return new Response(
    JSON.stringify({
      name: "Luminous Atelier WhatsApp Concierge",
      description:
        "Automated diamond jewelry product specialist and appointment scheduler for WhatsApp.",
      setup: {
        provider: "Twilio WhatsApp Business API",
        webhook: "/api/whatsapp",
      },
      docs: docsUrl,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
