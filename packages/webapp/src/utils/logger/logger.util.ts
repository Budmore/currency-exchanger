/* eslint-disable no-console */
export function logError(error: unknown) {
    if (error instanceof Error) {
        console.log(error.message);
    } else {
        console.log(error);
    }
}
