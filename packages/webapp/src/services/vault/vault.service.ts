import { CurrencyISOType } from '../../utils/currency/currency.util';

interface Vault {
    data: {
        currency: CurrencyISOType;
        balance: number;
    }[];
}

const mockResponse: Vault = {
    data: [
        { currency: 'GBP', balance: 1000 },
        { currency: 'USD', balance: 100 },
    ],
};

export const fetchVault = async () => {
    return Promise.resolve(mockResponse);
};
