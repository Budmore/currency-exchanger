export interface ResponseDTO {
    ticker: string;
    queryCount: number;
    resultsCount: number;
    adjusted: boolean;
    results: { c: number }[];
    status: string;
    request_id: string;
    count: number;
}
