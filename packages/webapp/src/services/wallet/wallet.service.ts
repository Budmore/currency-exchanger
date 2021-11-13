import { CurrencyISOType } from '@exchanger/shared';

interface WalletServiceProps {
    balance?: number;
    currency: CurrencyISOType;
}

export function createWallet({ balance = 0 }: WalletServiceProps) {
    const data = {
        history: [balance],
        balance,
    };

    const add = (value: number) => {
        if (value > 0) {
            data.balance += value;
            data.history.push(value);
        }
    };

    const subtract = (value: number) => {
        if (value > 0) {
            data.balance -= value;
            data.history.push(-value);
        }
    };

    const getBalance = () => {
        return data.balance;
    };

    return {
        add,
        subtract,
        getBalance,
    };
}
