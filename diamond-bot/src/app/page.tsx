export default function Home() {
  return (
    <main className="bg-gradient-to-b from-stone-50 via-white to-white text-stone-900">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-20 pt-16 md:px-10 lg:px-16">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm font-medium uppercase tracking-[0.25em] text-amber-600">
              Luminous Atelier Concierge
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Your WhatsApp diamond consultant for bespoke jewellery journeys.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl">
              The concierge guides clients from inspiration to purchase with curated
              recommendations, appointment scheduling, and post-purchase care --
              fully optimised for Twilio&apos;s WhatsApp Business API.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-stone-600">
              <span className="rounded-full border border-stone-200 bg-white px-4 py-2">
                Product curation intelligence
              </span>
              <span className="rounded-full border border-stone-200 bg-white px-4 py-2">
                Lead capture sequences
              </span>
              <span className="rounded-full border border-stone-200 bg-white px-4 py-2">
                Ready for Vercel deployment
              </span>
            </div>
          </div>
          <div className="relative rounded-3xl border border-stone-200 bg-white p-8 shadow-xl shadow-amber-100/40">
            <div className="absolute -top-6 right-8 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-600">
              Live Chat Preview
            </div>
            <div className="space-y-4 font-mono text-sm text-stone-700">
              <div className="rounded-2xl border border-stone-100 bg-stone-50 p-4">
                <p className="font-semibold text-emerald-700">Client @ 10:02</p>
                <p>
                  I&apos;m shopping for an engagement ring. Something classic with
                  a ton of sparkle. Budget is around 9k.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-100 bg-white p-4">
                <p className="font-semibold text-amber-700">Concierge @ 10:02</p>
                <p>
                  With a budget in the ~$9,000 range, here are pieces my clients
                  adore:
                </p>
                <ul className="mt-3 space-y-2">
                  <li>
                    - Aurora Halo Engagement Ring (8.5k-9.9k) - Signature sparkle
                    and hidden halo. Ready in 3 weeks.
                  </li>
                  <li>
                    - Luna Station Necklace (3.1k-3.6k) - Layers beautifully for an
                    elevated proposal set.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-stone-100 bg-white p-4">
                <p className="font-semibold text-amber-700">Concierge @ 10:03</p>
                <p>
                  I can reserve your favourite for 48 hours with a refundable
                  deposit, or set a private showroom visit. Share your email &amp;
                  timing and I&apos;ll arrange it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm shadow-stone-200/50">
            <h2 className="text-xl font-semibold text-stone-900">Conversational Flow</h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Keyword-driven intent routing recognises purchase readiness, custom
              design interest, servicing questions, and shipping support. Clients
              receive refined answers tailored to their tone and captured budget.
            </p>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm shadow-stone-200/50">
            <h2 className="text-xl font-semibold text-stone-900">Merchandising Brain</h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              A curated catalogue of signature pieces surfaces style notes, lead
              time, and upsell paths. Extend the JSON data set to plug in your
              live inventory service.
            </p>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm shadow-stone-200/50">
            <h2 className="text-xl font-semibold text-stone-900">Lead Capture</h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Every recommendation closes with a soft CTA to gather email and event
              details, supporting handoff into your CRM or automated nurture flow.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm shadow-stone-200/40">
          <h2 className="text-2xl font-semibold text-stone-900">Twilio WhatsApp Setup</h2>
          <ol className="mt-6 space-y-4 text-sm leading-relaxed text-stone-600">
            <li>
              1. Deploy this app to Vercel. The production URL automatically serves
              the webhook at <code className="rounded bg-stone-100 px-2 py-1 text-xs">/api/whatsapp</code>.
            </li>
            <li>
              2. In Twilio Console, connect your WhatsApp sender and paste the
              webhook endpoint (POST only).
            </li>
            <li>
              3. Add <code className="rounded bg-stone-100 px-2 py-1 text-xs">TWILIO_AUTH_TOKEN</code> and
              <code className="ml-1 rounded bg-stone-100 px-2 py-1 text-xs">NEXT_PUBLIC_BASE_URL</code>
              to your Vercel environment for signature validation.
            </li>
            <li>
              4. Extend <code className="rounded bg-stone-100 px-2 py-1 text-xs">src/lib/diamondChatbot.ts</code> with
              live inventory or connect to your commerce backend.
            </li>
          </ol>
          <p className="mt-6 text-sm text-stone-600">
            GET requests to this endpoint return metadata, making it easy to test
            health checks and observability pings.
          </p>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="rounded-3xl border border-stone-200 bg-gradient-to-br from-white via-white to-amber-50 p-8 shadow-sm shadow-stone-200/40">
            <h2 className="text-2xl font-semibold text-stone-900">
              Extend the concierge with:
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-stone-600">
              <li>- CRM handoff via HTTP webhook in the API route.</li>
              <li>- Shopify or Salesforce inventory lookups before crafting replies.</li>
              <li>- Secure customer profiles stored in Redis or Supabase.</li>
              <li>- Broadcast templates for holiday capsule launches.</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-stone-200 bg-stone-900 p-8 text-white shadow-lg shadow-stone-900/20">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-amber-200">
                Concierge personality
              </h3>
              <p className="text-sm text-stone-200">
                Polished, attentive, and decisively helpful. Balances romance with
                technical detail to build client confidence.
              </p>
            </div>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-stone-400">Tone</dt>
                <dd className="font-medium text-white">Gracious, expert, reassuring</dd>
              </div>
              <div>
                <dt className="text-stone-400">Response time</dt>
                <dd className="font-medium text-white">&lt; 2 seconds on Vercel Edge runtime</dd>
              </div>
              <div>
                <dt className="text-stone-400">Channels</dt>
                <dd className="font-medium text-white">WhatsApp, SMS, in-store kiosk</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </main>
  );
}
