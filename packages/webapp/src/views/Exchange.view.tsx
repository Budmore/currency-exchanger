import { InputExchange } from '@exchanger/shared';
import { useState } from 'react';
import { useDirection } from '../hooks/use-direction/useDirection';
import { MainLayout } from '../layouts/Main.layout';
import { exchange } from '../services/exchange/exchange.service';
import {
    CurrencyISO,
    CurrencyISOType,
    formatPriceWithCurrency,
} from '../utils/currency/currency.util';
import { willExceedBalance } from '../utils/direction/direction.util';

interface UserWallet {
    currency: CurrencyISOType;
    balance: number;
}

export const ExchangeView = () => {
    const wallets: UserWallet[] = [
        {
            currency: CurrencyISO.GBP,
            balance: 1000,
        },
        {
            currency: CurrencyISO.USD,
            balance: 0,
        },
    ];
    const [walletFirst, walletSecond] = wallets;
    const { direction, directionReversed, isDirectionOut, toggleDirection } =
        useDirection();

    const ratio = 1.3971;
    const isValid = false;

    const [values, setValues] = useState({
        [walletFirst.currency]: {
            value: 0,
            hasError: false,
        },
        [walletSecond.currency]: {
            value: 0,
            hasError: false,
        },
    });

    const onChange = (userWallet: UserWallet) => (value: number) => {
        const [otherWallet] = wallets.filter(
            wallet => wallet.currency !== userWallet.currency
        );

        const valueExchanged = exchange(value, ratio);

        setValues({
            [userWallet.currency]: {
                value: value,
                hasError: false,
            },
            [otherWallet.currency]: {
                value: valueExchanged,
                hasError: false,
            },
        });
    };

    return (
        <MainLayout>
            <h1 data-testid="title">
                {isDirectionOut ? 'Sell' : 'Buy'} {walletFirst.currency}
            </h1>

            <p>Ratio: {ratio}</p>

            <InputExchange
                direction={direction}
                value={values[walletFirst.currency].value}
                hasError={willExceedBalance({
                    direction,
                    value: values[walletFirst.currency].value,
                    balance: walletFirst.balance,
                })}
                currency={walletFirst.currency}
                balance={formatPriceWithCurrency(
                    walletFirst.balance,
                    walletFirst.currency
                )}
                onChange={onChange(walletFirst)}
            />

            <button type="button" onClick={toggleDirection}>
                Toggle
            </button>

            <InputExchange
                direction={directionReversed}
                value={values[walletSecond.currency].value}
                hasError={willExceedBalance({
                    direction: directionReversed,
                    value: values[walletSecond.currency].value,
                    balance: walletSecond.balance,
                })}
                currency={walletSecond.currency}
                balance={formatPriceWithCurrency(
                    walletSecond.balance,
                    walletSecond.currency
                )}
                onChange={onChange(walletSecond)}
            />

            <br />
            <button disabled={!isValid}>Exchange</button>
        </MainLayout>
    );
};
