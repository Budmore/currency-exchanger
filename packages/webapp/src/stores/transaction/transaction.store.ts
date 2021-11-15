import create from 'zustand';
import createVanilla from 'zustand/vanilla';
import { CurrencyISOType } from '../../utils/currency/currency.util';
import {
    Direction,
    DirectionType,
    reverseDirection,
} from '../../utils/direction/direction.util';

interface TransactionStore {
    currencies: CurrencyISOType[];
    direction: DirectionType;
    directionReversed: DirectionType;
    getCurrenciesInDirection(): CurrencyISOType[];
    getDirectionLabel(): string;
    getDirectionLabel(): string;
    setCurrencies(prev: string, next: string): void;
    toggleDirection(): void;
}

export const transactionStore = createVanilla<TransactionStore>((set, get) => ({
    currencies: ['GBP', 'USD'],
    direction: Direction.Out,
    directionReversed: Direction.In,
    getCurrenciesInDirection: () => {
        const { direction, currencies } = get();
        const currenciesCopy = currencies.slice();

        return direction === Direction.Out
            ? currencies
            : currenciesCopy.reverse();
    },
    getDirectionLabel: () => {
        const { direction } = get();
        return direction === Direction.Out ? 'Sell' : 'Buy';
    },
    setCurrencies: (prev, next) => {
        const { currencies } = get();

        const index = currencies.findIndex(currency => currency === prev);
        currencies[index] = next as CurrencyISOType;

        set({
            currencies,
        });
    },
    toggleDirection: () => {
        set(prevState => ({
            direction: reverseDirection(prevState.direction),
            directionReversed: prevState.direction,
        }));
    },
}));

export const useTransactionStore = create(transactionStore);
