import { FormEvent, useState } from 'react';
import { useIntervalExchangeRatio } from '../../../queries/forex/useForex.query';
import { exchange } from '../../../services/exchange/exchange.service';
import { useTransactionStore } from '../../../stores/transaction/transaction.store';
import { CurrencyISOType } from '../../../utils/currency/currency.util';
import { ExchangeBox } from './ExchangeBox';

export const ExchangeForm = () => {
    const { currencies, direction, directionReversed, toggleDirection } =
        useTransactionStore();
    const { data: ratio = 1 } = useIntervalExchangeRatio();
    const [currencyPrimary, currencySecondary] = currencies;

    const [values, setValues] = useState({
        [currencyPrimary]: 0,
        [currencySecondary]: 0,
    });

    const [errors, setErrors] = useState({
        [currencyPrimary]: false,
        [currencySecondary]: false,
    });

    const hasErrors = Object.values(errors).some(e => e);
    const hasValues = Object.values(values).every(e => e);
    const isValid = hasValues && !hasErrors;

    const onError = (currency: CurrencyISOType) => (hasError: boolean) => {
        setErrors(prevState => ({
            ...prevState,
            [currency]: hasError,
        }));
    };

    const onChange = (currency: CurrencyISOType) => (value: number) => {
        const [otherCurrency] = currencies.filter(
            _currency => _currency !== currency
        );

        const valueExchanged = exchange(value, ratio);

        setValues({
            [currency]: value,
            [otherCurrency]: valueExchanged,
        });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <ExchangeBox
                currency={currencyPrimary}
                direction={direction}
                value={values[currencyPrimary]}
                onChange={onChange(currencyPrimary)}
                onError={onError(currencyPrimary)}
            />

            <button type="button" onClick={toggleDirection}>
                Toggle
            </button>

            <ExchangeBox
                currency={currencySecondary}
                direction={directionReversed}
                value={values[currencySecondary]}
                onChange={onChange(currencySecondary)}
                onError={onError(currencySecondary)}
            />

            <button disabled={!isValid}>Exchange</button>
        </form>
    );
};
