import { subtraction, sum } from '../../utils/math/math.util';

export interface Wallet {
    add(value: number): void;
    subtract(value: number): void;
    getBalance(): number;
}

export function createWallet({ balance = 0 }): Wallet {
    const data = {
        history: [balance],
        balance,
    };

    const add = (value: number) => {
        if (value > 0) {
            const nextBalance = sum(data.balance, value);
            data.balance = nextBalance;
            data.history.push(nextBalance);
        }
    };

    const subtract = (value: number) => {
        if (value > 0) {
            const nextBalance = subtraction(data.balance, value);
            data.balance = nextBalance;
            data.history.push(-nextBalance);
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
