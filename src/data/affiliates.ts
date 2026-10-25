/**
 * Paste your real affiliate URLs after programs approve you.
 * Until then, links open official product pages (no commission).
 */
export const affiliateLinks = {
  esimCity: "https://www.airalo.com/",
  esimMountains: "https://esim.holafly.com/",
  transfer: "https://gotrip.ge/",
  hotelsTbilisi: "https://www.booking.com/city/ge/tbilisi.html",
  hotelsBatumi: "https://www.booking.com/city/ge/batumi.html",
  kazbegiTour: "https://www.getyourguide.com/tbilisi-l266/kazbegi-tc766/",
  kakhetiTour: "https://www.getyourguide.com/tbilisi-l266/kakheti-tc767/",
  carRental: "https://www.rentalcars.com/",
} as const;

export type AffiliateKey = keyof typeof affiliateLinks;

export function aff(key: AffiliateKey): string {
  return affiliateLinks[key];
}
