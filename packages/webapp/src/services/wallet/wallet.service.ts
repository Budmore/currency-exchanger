interface WalletServiceProps {
    balance?: number;
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
