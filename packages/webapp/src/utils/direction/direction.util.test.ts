import { reverseDirection, willExceedBalance } from './direction.util';

describe('direction.util.ts', () => {
    describe('reverseDirection()', () => {
        it.each`
            input        | expected
            ${'In'}      | ${'Out'}
            ${'Out'}     | ${'In'}
            ${undefined} | ${'Out'}
        `(
            'should reverse direction from "$input" to "$expected"',
            ({ input, expected }) => {
                const result = reverseDirection(input);
                expect(result).toBe(expected);
            }
        );
    });

    describe('willExceedBalance()', () => {
        it.each`
            direction | value  | balance | expected
            ${'In'}   | ${100} | ${100}  | ${false}
            ${'Out'}  | ${100} | ${100}  | ${false}
            ${'In'}   | ${0}   | ${100}  | ${false}
            ${'Out'}  | ${0}   | ${100}  | ${false}
            ${'In'}   | ${100} | ${0}    | ${false}
            ${'Out'}  | ${100} | ${0}    | ${true}
        `(
            'returns $expected when "$direction" -> "$value" -> "$balance"',
            ({ value, balance, direction, expected }) => {
                const result = willExceedBalance({ direction, value, balance });
                expect(result).toBe(expected);
            }
        );
    });
});
