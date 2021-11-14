import axios from 'axios';
import { ResponseDTO } from './forex.types';

async function mapResponseDTO(response: ResponseDTO) {
    return response.results[0].c;
}

export const fetchExchangeRate = async (forexTicker: string) => {
    const FOREX_API_HOSTNAME = process.env.FOREX_API_HOSTNAME;
    const FOREX_API_KEY = process.env.FOREX_API_KEY;
    const url = `${FOREX_API_HOSTNAME}/v2/aggs/ticker/${forexTicker}/prev?apiKey=${FOREX_API_KEY}`;

    return axios
        .get<ResponseDTO>(url)
        .then(response => mapResponseDTO(response.data));
};
