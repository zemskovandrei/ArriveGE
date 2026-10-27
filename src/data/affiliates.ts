/**
 * Travelpayouts partner links for ArriveGE — one link per job.
 */
export const affiliateLinks = {
  esim: "https://yesim.tpm.li/uPQWE445",
  transfer: "https://kiwitaxi.tpm.li/RVF6IxWY",
  hotelsTbilisi: "https://www.booking.com/city/ge/tbilisi.html",
  hotelsBatumi: "https://www.booking.com/city/ge/batumi.html",
  tours: "https://klook.tpm.li/9btfDQm8",
  flights: "https://aviasales.tpm.li/uj274lOV",
  carRental: "https://localrent.tpm.li/x2Ax2mVR",
} as const;

export type AffiliateKey = keyof typeof affiliateLinks;

export function aff(key: AffiliateKey): string {
  return affiliateLinks[key];
}
