import { CurrencyISO, CurrencyISOType, InputExchange } from '@exchanger/shared';
import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { exchange } from '../services/exchange/exchange.service';
import {
    Direction,
    DirectionType,
    reverseDirection,
} from '../utils/direction/direction.util';

export const ExchangeView = ({ initialDirection = Direction.Out }) => {
    const wallets: CurrencyISO[] = [CurrencyISO.GBP, CurrencyISO.USD];
    const [wallet0, wallet1] = wallets;
    const [direction, setDirection] = useState(initialDirection);
    const directionReversed = reverseDirection(direction);
    const ratio = 1.3971;

    const isValid = false;

    const [values, setValues] = useState({
        [wallet0]: 0,
        [wallet1]: 0,
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
                {direction === Direction.Out ? 'Sell' : 'Buy'} {wallet0}
            </h1>

            <p>Ratio: {ratio}</p>

            <InputExchange
                currency={wallet0}
                value={values[wallet0]}
                balance={3396.42}
                direction={direction}
                onChange={onChange(wallet0)}
                hasError={willExceedBalance(
                    3396.42,
                    values[wallet0],
                    direction
                )}
            />

            <button type="button" onClick={toggleDirection}>
                Toggle
            </button>

            <InputExchange
                currency={wallet1}
                value={values[wallet1]}
                balance={19.42}
                direction={directionReversed}
                onChange={onChange(wallet1)}
                hasError={willExceedBalance(
                    19.42,
                    values[wallet1],
                    directionReversed
                )}
            />

            <br />
            <button disabled={isValid}>Exchange</button>
        </MainLayout>
    );
};
