import { InputExchange } from '@exchanger/shared';
import { useState } from 'react';
import { MainLayout } from '../layouts/Main.layout';
import { exchange } from '../services/exchange/exchange.service';
import {
    CurrencyISO,
    CurrencyISOType,
    formatPriceWithCurrency,
} from '../utils/currency/currency.util';
import {
    Direction,
    DirectionType,
    reverseDirection,
} from '../utils/direction/direction.util';

export const ExchangeView = ({ initialDirection = Direction.Out }) => {
    const wallets: CurrencyISO[] = [CurrencyISO.GBP, CurrencyISO.USD];
    const [currency0, currency1] = wallets;
    const [direction, setDirection] = useState(initialDirection);
    const directionReversed = reverseDirection(direction);
    const ratio = 1.3971;

    const isValid = false;

    const [values, setValues] = useState({
        [currency0]: 0,
        [currency1]: 0,
    });

    const willExceedBalance = (
        balance: number,
        value: number,
        direction: DirectionType
    ) => direction === Direction.Out && balance - value < 0;

    const toggleDirection = () => {
        setDirection(directionReversed);
    };

    const onChange = (currency: CurrencyISOType) => (value: number) => {
        const [otherCurrency] = wallets.filter(wallet => wallet !== currency);

        setValues({
            [currency]: value,
            [otherCurrency]: exchange(value, ratio),
        });
    };

    return (
        <MainLayout>
            <h1 data-testid="title">
                {direction === Direction.Out ? 'Sell' : 'Buy'} {currency0}
            </h1>

            <p>Ratio: {ratio}</p>

            <InputExchange
                currency={currency0}
                value={values[currency0]}
                balance={formatPriceWithCurrency(3396.42, currency0)}
                direction={direction}
                onChange={onChange(currency0)}
                hasError={willExceedBalance(
                    3396.42,
                    values[currency0],
                    direction
                )}
            />

            <button type="button" onClick={toggleDirection}>
                Toggle
            </button>

            <InputExchange
                currency={currency1}
                value={values[currency1]}
                balance={formatPriceWithCurrency(0, currency1)}
                direction={directionReversed}
                onChange={onChange(currency1)}
                hasError={willExceedBalance(
                    0,
                    values[currency1],
                    directionReversed
                )}
            />

            <br />
            <button disabled={!isValid}>Exchange</button>
        </MainLayout>
    );
};
