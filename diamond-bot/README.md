## Luminous Atelier WhatsApp Concierge

Diamond jewellery shopping assistant purpose-built for WhatsApp. The agent curates signature collections, captures leads, and books private consultations through Twilio's WhatsApp Business API.

### Features

- Intent-driven responses for product discovery, bespoke design, servicing, and shipping
- Curated catalogue (see `src/lib/diamondChatbot.ts`) with highlights, availability, and upsell hooks
- Lead capture prompts on every thread to gather customer email and preferred appointment timing
- Twilio signature validation (env: `TWILIO_AUTH_TOKEN`) with optional base URL override (`NEXT_PUBLIC_BASE_URL`)
- JSON metadata health check on `GET /api/whatsapp`

### Local Development

```bash
npm install
npm run dev
```

Send a webhook-style POST to `http://localhost:3000/api/whatsapp` using `application/x-www-form-urlencoded` params (`Body`, `From`, `ProfileName`) to test replies.

### Deploy to Vercel

1. `npm run build` to ensure the bundle passes type check & lint.
2. Set env vars in Vercel:
   - `TWILIO_AUTH_TOKEN` - enables webhook signature validation
   - `NEXT_PUBLIC_BASE_URL` - optional e.g. `https://agentic-e9a6d586.vercel.app`
3. Deploy with `vercel deploy --prod`.
4. Configure the Twilio WhatsApp sandbox/sender webhook to `https://agentic-e9a6d586.vercel.app/api/whatsapp`.

Extend the catalogue or wire the handler into your commerce backend for live inventory, order tracking, or CRM integrations.
