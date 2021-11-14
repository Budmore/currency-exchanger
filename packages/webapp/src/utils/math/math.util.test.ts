import { subtraction, sum } from './math.util';

describe('math.util.ts', () => {
    describe('sum()', () => {
        it('should sum the numbers', () => {
            // GIVEN
            const a = 0.1;
            const b = 0.2;

            // WHEN
            const results = sum(a, b);

            // THEN
            expect(results).toBe(0.3);
        });

        it('should sum more complex numbers', () => {
            // GIVEN
            const a = 10.0000001;
            const b = 10.0000002;
            const precision = 7;

            // WHEN
            const results = sum(a, b, precision);

            // THEN
            expect(results).toBe(20.0000003);
        });

        it('should sum a balance example', () => {
            // GIVEN
            const a = 134093.33923811;
            const b = 296513.71589655;
            const precision = 8;

            // WHEN
            const results = sum(a, b, precision);

            // THEN
            expect(results).toBe(430607.05513466);
        });
    });

    describe('subtraction()', () => {
        it('should subtract the numbers', () => {
            // GIVEN
            const a = 0.3;
            const b = 0.2;

            // WHEN
            const results = subtraction(a, b);

            // THEN
            expect(results).toBe(0.1);
        });

        it('should subtract more complex numbers', () => {
            // GIVEN
            const a = 20.0000003;
            const b = 10.0000002;
            const precision = 7;

            // WHEN
            const results = subtraction(a, b, precision);

            // THEN
            expect(results).toBe(10.0000001);
        });

        it('should subtract a balance example', () => {
            // GIVEN
            const a = 430607.05513466;
            const b = 296513.71589655;
            const precision = 8;

            // WHEN
            const results = subtraction(a, b, precision);

            // THEN
            expect(results).toBe(134093.33923811);
        });
    });
});
