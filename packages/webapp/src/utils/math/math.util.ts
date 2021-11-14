const DIGITS_PRECISION_DEFAULT = 2;

export function sum(
    a: number,
    b: number,
    digits = DIGITS_PRECISION_DEFAULT
): number {
    return +(a + b).toFixed(digits);
}

export function subtraction(
    a: number,
    b: number,
    digits = DIGITS_PRECISION_DEFAULT
): number {
    return +(a - b).toFixed(digits);
}
