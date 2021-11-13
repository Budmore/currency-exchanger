import { exchange } from './exchange.service';

describe('exchange.service.ts', () => {
    it('should exchange value by factor', () => {
        // GIVEN
        const inputValue = 100;
        const exchangeRatio = 1.12;

        // WHEN
        const outputValue = exchange(inputValue, exchangeRatio);

        // THEN
        expect(outputValue).toEqual(112);
    });
});
