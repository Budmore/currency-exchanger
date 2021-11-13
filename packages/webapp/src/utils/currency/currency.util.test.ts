import { formatPriceWithCurrency } from './currency.util';

describe('formatPriceWithCurrency()', () => {
    it.each`
        currency | locale     | value       | expected
        ${'usd'} | ${'en-US'} | ${100}      | ${'$100.00'}
        ${'usd'} | ${'en-US'} | ${1000.234} | ${'$1,000.23'}
        ${'KRW'} | ${'en-US'} | ${10000}    | ${'₩10,000.00'}
        ${'usd'} | ${'de-DE'} | ${100}      | ${'100,00\xa0$'}
        ${'KRW'} | ${'de-DE'} | ${10000}    | ${'10.000,00\xa0₩'}
        ${'gbp'} | ${'de-DE'} | ${99.125}   | ${'99,13\xa0£'}
    `(
        'format price currency per locale',
        ({ currency, locale, value, expected }) => {
            expect(formatPriceWithCurrency(value, currency, 2, locale)).toEqual(
                expected
            );
        }
    );
});
