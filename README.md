# 🏔️ Hillora Ella — A Quiet Stay in the Hills

The official booking website for **Hillora Ella**, an eco-friendly, vegan-friendly
mountain retreat in **Kithal Ella, Ella, Sri Lanka**.

Built with React + Vite and a hand-crafted **"Natural Organic" 3D design system**:
sage / forest / matcha greens over warm beige, off-white and soft sand, with soft
elevated shadows, subtle gradients, glassmorphic and neumorphic surfaces.

## ✨ Features

- **Sticky glassmorphic navbar** with scroll-spy, mobile menu and 3D "Book Now" CTA
- **Full-screen hero** with a floating 3D booking widget (check-in / check-out / guests)
- **Availability check** with validation, toast feedback and per-room capacity logic
- **Room cards** (image, title, capacity, eco amenities, price) with a booking modal
  that hands off to **WhatsApp / email** with a pre-filled confirmation message
- **Why Choose Us** 3D tilt cards · **About** section · **Gallery** with lightbox
- **"Connect & Follow Our Journey"** social grid (Instagram, Facebook, YouTube,
  TikTok, Pinterest, Threads)
- **Contact & footer** with embedded Google Map, address, email, direct + WhatsApp
  phone lines (Sri Lanka ×2, France ×1) and Google Business Profile review link
- Fully responsive, **mobile-first**, `prefers-reduced-motion` aware, zero icon/CDN deps

## 🚀 Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## 🖥️ If the site "doesn't load" locally

This is a Vite + React app — it must be served by the dev server.
**Double-clicking `index.html` will not work** (blank page is expected via `file://`).

```bash
# 1. Node 18+ is required — check with:  node -v   (repo ships a .nvmrc for Node 20)
# 2. Install dependencies (one time only):
npm install
# 3. Start the server and open the printed URL (usually http://localhost:5173):
npm run dev
```

Common fixes:

| Symptom                              | Fix                                              |
| ------------------------------------ | ------------------------------------------------ |
| `vite: command not found`            | Run `npm install` first                          |
| Blank page from `index.html` click   | Use `npm run dev` and open `http://localhost:5173` |
| `Vite requires Node.js version 18+`  | Upgrade Node (LTS 20) or `nvm use`               |
| Port already in use                  | `npm run dev -- --port 5174`                     |
| Production sanity check              | `npm run build && npm run preview`               |

## 🖼️ Swapping in the real photos & logo

All imagery currently uses generated stand-ins. Every slot on the page is visibly
labeled with a dashed **`INSERT_REAL_MAPS_IMAGE_HERE`** badge.

1. Pull the real photos from the [Google Maps listing](https://maps.app.goo.gl/st65DzDzJ9mktRhm9)
   (or the Hillora Ella social channels).
2. Replace the files in `public/assets/images/` **keeping the same file names** —
   see [`public/assets/images/README.md`](public/assets/images/README.md) for the slot map.
3. Logo: the brand mark is loaded from `public/assets/images/logo.png` **or**
   `logo.jpg` (whichever exists — `.png` tried first). Overwrite/add either file
   with the official artwork and refresh; no code changes needed. Placements:
   navbar top-left, footer brand plate, favicon. Both use light surfaces with a
   `multiply` blend so the artwork always keeps full contrast.

## 🔌 Booking flow (placeholder logic)

`Check Availability` → validates dates → highlights availability above the rooms.
`Book This Room` → modal form → success screen with **Confirm on WhatsApp** /
**Confirm by Email** buttons. To go live, point the form's submit handler at your
reservations API or a service like Formspree/Resmo.

## 📞 Real-world details wired in

- Address: No. 54, Yahalegoda, Kithal Ella, Ella, Sri Lanka (map embedded)
- Email: hilloraella@gmail.com
- Phones / WhatsApp: +94 71 24 18 114 · +94 76 65 38 114 · +33 75 840 3274 (France)
- Google Business Profile: https://maps.app.goo.gl/st65DzDzJ9mktRhm9
