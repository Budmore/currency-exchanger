import shallow from 'zustand/shallow';
import { useTransactionStore } from '../../stores/transaction/transaction.store';
import { ExchangeForm } from './components/ExchangeForm';
import { Ratio } from './components/ExchangeRatio';

export const Exchange = () => {
    const { isDirectionOut, currencyPrimary, directionCurrencies } =
        useTransactionStore(
            state => ({
                isDirectionOut: state.isDirectionOut,
                currencyPrimary: state.currencies[0],
                directionCurrencies: state.directionCurrencies,
            }),
            shallow
        );

    return (
        <div>
            <h1 data-testid="title">
                {isDirectionOut ? 'Sell' : 'Buy'} {currencyPrimary}
            </h1>

            <Ratio currencies={directionCurrencies} />
            <ExchangeForm />
        </div>
    );
};
