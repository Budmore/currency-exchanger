import create from 'zustand';
import createVanilla from 'zustand/vanilla';
import { fetchVault } from '../../services/vault/vault.service';
import { createWallet, Wallet } from '../../services/wallet/wallet.service';
import {
    CurrencyISOType,
    formatPriceWithCurrency,
} from '../../utils/currency/currency.util';
import { logError } from '../../utils/logger/logger.util';

interface VaultStore {
    wallets: Partial<Record<CurrencyISOType, Wallet>>;
    init: () => void;
    getWallet: (currency: CurrencyISOType) => Wallet | undefined;
    getBalance: (currency: CurrencyISOType) => number | undefined;
    getBalanceFormatted: (currency: CurrencyISOType) => string | undefined;
    createWallet: (currency: CurrencyISOType, balance?: number) => void;
    add: (currency: CurrencyISOType, value: number) => void;
    subtract: (currency: CurrencyISOType, value: number) => void;
}

export const vaultStore = createVanilla<VaultStore>((set, get) => ({
    wallets: {},

    init: async () => {
        try {
            const response = await fetchVault();
            const { createWallet } = get();

            response.data.forEach(({ balance, currency }) => {
                createWallet(currency, balance);
            });
        } catch (error) {
            logError(error);
        }
    },

    getWallet: currency => {
        const { wallets } = get();

        return wallets[currency];
    },

    getBalance: currency => {
        const wallet = get().wallets[currency];

        if (wallet) {
            return wallet.getBalance();
        }
    },

    getBalanceFormatted: currency => {
        const { getBalance } = get();

        const balance = getBalance(currency);
        if (balance !== undefined) {
            return formatPriceWithCurrency(balance, currency);
        }
    },

    createWallet: (currency, balance = 0) => {
        const { wallets, getWallet } = get();

        const wallet = getWallet(currency);

        if (!wallet) {
            set(state => ({
                ...state,
                wallets: {
                    ...wallets,
                    [currency]: createWallet({ balance }),
                },
            }));
        }
    },

    add: (currency, value) => {
        const wallet = get().wallets[currency];

        if (wallet) {
            wallet.add(value);
        }
    },

    subtract: (currency, value) => {
        const wallet = get().wallets[currency];

        if (wallet) {
            wallet.subtract(value);
        }
    },
}));

export const useVaultStore = create(vaultStore);
