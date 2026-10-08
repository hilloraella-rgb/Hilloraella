# 🖼️ Image slots — swap guide

Every photo on the site currently uses a generated stand-in image. Each slot on the
website is visibly labeled **`INSERT_REAL_MAPS_IMAGE_HERE`** (dashed amber badge) so you
can see exactly what to replace.

Replace the files below **keeping the same file names** — no code changes needed.
Source the real photos from:

- Google Maps listing: <https://maps.app.goo.gl/st65DzDzJ9mktRhm9>
- The Hillora Ella social channels (Instagram / Facebook / YouTube).

| File                                   | Where it appears                        | Pick from Maps                                    |
| -------------------------------------- | --------------------------------------- | ------------------------------------------------- |
| `hero.jpg`                             | Full-width hero background              | The widest panoramic mountain/tea-field view      |
| `exterior.jpg`                         | About Us section                        | Exterior shot of the house / property             |
| `rooms/room-misty-peak.jpg`            | Rooms → Misty Peak Room card            | Bedroom with the mountain view                    |
| `rooms/room-garden-nest.jpg`           | Rooms → Garden Nest Room card           | Bedroom opening to the garden                     |
| `rooms/room-cloud-suite.jpg`           | Rooms → Cloud Nine Family Suite card    | The largest room / suite                          |
| `gallery/tea-trail.jpg`                | Gallery tile 1 (wide)                   | Tea plantation / walking path shot                |
| `gallery/breakfast.jpg`                | Gallery tile 2                          | Breakfast / food shot                             |
| `gallery/veranda-dusk.jpg`             | Gallery tile 3                          | Veranda / evening / sunset shot                   |
| `gallery/eco-bathroom.jpg`             | Gallery tile 4                          | Bathroom / linen detail                           |

The gallery also re-uses `hero.jpg`, `exterior.jpg` and the three room photos, so
swapping the files above refreshes those tiles automatically.

## Logo

The nav/footer currently use a built-in SVG wordmark (`src/components/Logo.jsx`).
Drop the official logo at `public/assets/images/logo.png` and tell me (or replace the
`<Logo />` internals with an `<img src="/assets/images/logo.png" />`) to switch over.
