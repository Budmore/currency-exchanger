import { CurrencyISOType } from '../../utils/currency/currency.util';

interface Vault {
    data: {
        currency: CurrencyISOType;
        balance: number;
    }[];
}

const mockResponse: Vault = {
    data: [
        { currency: 'GBP', balance: 3396.42 },
        { currency: 'USD', balance: 0.13 },
    ],
};

export const fetchVault = async () => {
    return Promise.resolve(mockResponse);
};

export const setVault = async () => {
    return Promise.resolve();
};
