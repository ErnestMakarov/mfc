# Maardu Finswimming Club website

React + Vite website for Maardu Finswimming Club, including the multilingual clubwear catalogue.

## Run locally

Requirements: Node.js 22.12+ (or 20.19+) and npm.

```bash
npm ci
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`).

## Clubwear cart

- Catalogue: `/merch`
- Product pages: `/merch/:slug`
- Cart: `/merch/cart`
- Checkout/request form: `/merch/checkout`

Select a size and quantity on a product page, add it to the cart, then review all items and submit one combined request. Cart contents are saved in the browser's `localStorage`. This is a request form, not online payment; the club confirms the price and collection details separately.

## Configure EmailJS

Copy `.env.example` to `.env.local` and set `VITE_EMAILJS_MERCH_TEMPLATE_ID` to the actual Template ID in the EmailJS dashboard. The default service ID and public key are the existing public project values; change them if your EmailJS setup differs. Never put an EmailJS private key in client-side environment variables.

Update the EmailJS template HTML using `docs/merch/emailjs-template.html` so the email includes the complete list in `{{order_items}}`. Restart the dev server after changing `.env.local`. On production hosting, add the same `VITE_` variables to the host's environment settings and rebuild.

See `docs/merch/SETUP-RU.md` for Russian setup notes.
