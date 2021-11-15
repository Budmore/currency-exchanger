export function exchange(value: number, factor: number) {
    return +(value * factor).toFixed(2);
}

const REQUEST_TIMEOUT_MS = 500;

export async function setExchange(
    params: RequestVariables
): Promise<SuccessResponse> {
    return new Promise(resolve =>
        setTimeout(() => {
            const successResponse = params as unknown as SuccessResponse;
            resolve(successResponse);
        }, REQUEST_TIMEOUT_MS)
    );
}

export interface SuccessResponse {
    values: number[];
}

export interface RequestVariables {
    values: number[];
}
