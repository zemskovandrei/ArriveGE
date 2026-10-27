/**
 * Travelpayouts partner links for ArriveGE.
 * Paste new tpm.li links here — then push to update the live site.
 */
export const affiliateLinks = {
  esimCity: "https://yesim.tpm.li/3QEvDFbd",
  esimMountains: "https://yesim.tpm.li/3QEvDFbd",
  transfer: "https://gettransfer.tpm.li/jenUkCti",
  transferAirport: "https://kiwitaxi.tpm.li/RVF6IxWY",
  transferWelcome: "https://tpm.li/C0F3PBQL",
  hotelsTbilisi: "https://www.booking.com/city/ge/tbilisi.html",
  hotelsBatumi: "https://www.booking.com/city/ge/batumi.html",
  kazbegiTour: "https://klook.tpm.li/9btfDQm8",
  kakhetiTour: "https://klook.tpm.li/9btfDQm8",
  cityPass: "https://gocity.tpm.li/gxZcib15",
  flights: "https://aviasales.tpm.li/cAe6WKkK",
  carRental: "https://localrent.tpm.li/x2Ax2mVR",
  carRentalAlt: "https://getrentacar.tpm.li/wfpBP73u",
} as const;

export type AffiliateKey = keyof typeof affiliateLinks;

export function aff(key: AffiliateKey): string {
  return affiliateLinks[key];
}
