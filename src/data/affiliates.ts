/**
 * Travelpayouts partner links for ArriveGE — one link per job.
 */
export const affiliateLinks = {
  esim: "https://saily.tpm.lv/2N8ZvXs7",
  transfer: "https://kiwitaxi.tpm.lv/iLJ2EER5",
  hotelsTbilisi: "https://tpm.lv/oPscXl9x",
  hotelsBatumi: "https://tpm.lv/oPscXl9x",
  tours: "https://klook.tpm.lv/Bv9YO9la",
  flights: "https://aviasales.tpm.lv/ng7toe8b",
  carRental: "https://localrent.tpm.lv/j8aNQG5J",
} as const;

export type AffiliateKey = keyof typeof affiliateLinks;

export function aff(key: AffiliateKey): string {
  return affiliateLinks[key];
}
