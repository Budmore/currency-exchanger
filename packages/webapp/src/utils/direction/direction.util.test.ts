import { reverseDirection } from './direction.util';

describe('direction.util - reverseDirection()', () => {
    it.each`
        input        | expected
        ${'In'}      | ${'Out'}
        ${'Out'}     | ${'In'}
        ${undefined} | ${'Out'}
    `('should reverse direction', ({ input, expected }) => {
        const result = reverseDirection(input);
        expect(result).toBe(expected);
    });
});
