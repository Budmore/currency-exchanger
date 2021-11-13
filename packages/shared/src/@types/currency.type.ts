export enum CurrencyISO {
    EUR = 'EUR',
    GBP = 'GBP',
    PLN = 'PLN',
    USD = 'USD',
}
export type CurrencyISOType = keyof typeof CurrencyISO;
