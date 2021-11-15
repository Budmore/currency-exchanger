import axios from 'axios';
import { config } from '../../config';
import { ResponseDTO } from './forex.types';

async function mapResponseDTO(response?: ResponseDTO) {
    if (response) {
        return response.results[0]?.c;
    } else {
        return 0;
    }
}
export const fetchExchangeRate = async (forexTicker: string) => {
    const url = `${config.FOREX_API_HOSTNAME}/v2/aggs/ticker/${forexTicker}/prev?apiKey=${config.FOREX_API_KEY}`;

    return axios
        .get<ResponseDTO>(url)
        .then(response => mapResponseDTO(response.data));
};
