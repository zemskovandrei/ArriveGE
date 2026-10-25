# ArriveGE

Independent English checklist site for travelers to Georgia.
Helps people book **eSIM, airport transfer, hotels, Kazbegi, Kakheti** before they land — and earns affiliate commission when they book through your links.

Built with **Astro** (no Python). Separate from MasterDirect and any other app you own.

## Run locally

```bash
cd /home/work/ArriveGE
npm install
npm run dev
```

Open the URL Astro prints (usually [http://localhost:4321](http://localhost:4321)).

```bash
npm run build    # static site → dist/
npm run preview  # preview the build
```

## Put your money links in

Edit `src/data/affiliates.ts` and replace the placeholder URLs with your approved affiliate links:

| Key | What it is | Where to get a link |
| --- | --- | --- |
| `esimCity` | City eSIM | Airalo (Impact) / Travelpayouts |
| `esimMountains` | Mountain eSIM | Holafly partners |
| `transfer` | Airport / private driver | [GoTrip affiliate](https://affiliate.gotrip.ge/en) |
| `hotelsTbilisi` / `hotelsBatumi` | Hotels | Booking via Travelpayouts |
| `kazbegiTour` / `kakhetiTour` | Day trips | GetYourGuide affiliate |
| `carRental` | Cars | Rentalcars / Travelpayouts |

Until you paste real links, buttons open the public product sites (no commission).

## Pages

- `/` — brand + booking checklist
- `/esim-georgia`
- `/tbilisi-airport-transfer`
- `/tbilisi-hotels`
- `/batumi-hotels`
- `/kazbegi-day-trip`
- `/kakheti-wine-tour`

## Traffic that pays

1. YouTube / Shorts in English: “Georgia eSIM”, “Tbilisi airport transfer”, “Kazbegi day trip”.
2. Each video description → one ArriveGE page → one affiliate button.
3. eSIM and transfer convert fastest; hotels and tours have higher tickets.

## Deploy

GitHub Pages (automatic on push to `master`):

**https://zemskovandrei.github.io/ArriveGE/**

Local build: `npm run build` → `dist/`.
