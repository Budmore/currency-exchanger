import create from 'zustand';
import createVanilla from 'zustand/vanilla';
import { CurrencyISOType } from '../../utils/currency/currency.util';
import {
    Direction,
    DirectionType,
    reverseDirection,
} from '../../utils/direction/direction.util';

interface TransactionStore {
    currencies: [CurrencyISOType, CurrencyISOType];
    direction: DirectionType;
    directionReversed: DirectionType;
    directionCurrencies: CurrencyISOType[];
    isDirectionOut: boolean;
    toggleDirection(): void;
}

export const transactionStore = createVanilla<TransactionStore>((set, get) => ({
    currencies: ['GBP', 'USD'],
    direction: Direction.Out,
    directionReversed: Direction.In,
    directionCurrencies: ['GBP', 'USD'],
    isDirectionOut: true,
    toggleDirection: () => {
        const { direction, directionCurrencies } = get();
        const nextDirection = reverseDirection(direction);
        const nextDirectionReversed = direction;

        set({
            direction: nextDirection,
            directionReversed: nextDirectionReversed,
            isDirectionOut: nextDirection === Direction.Out,
            directionCurrencies: directionCurrencies.reverse(),
        });
    },
}));

export const useTransactionStore = create(transactionStore);
