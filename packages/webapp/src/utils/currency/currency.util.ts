const DEFAULT_USER_LOCALE = 'en-US';

export enum CurrencyISO {
    EUR = 'EUR',
    GBP = 'GBP',
    KRW = 'KRW',
    USD = 'USD',
}
export type CurrencyISOType = keyof typeof CurrencyISO;

export const formatPriceWithCurrency = (
    value: number,
    currency: CurrencyISOType,
    decimals = 2,
    locale = DEFAULT_USER_LOCALE
) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: decimals,
    }).format(value);
};
