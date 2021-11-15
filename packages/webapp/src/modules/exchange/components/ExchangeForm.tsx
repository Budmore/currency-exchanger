import { Button } from '@exchanger/shared';
import { FormEvent, useState } from 'react';
import { useExchangeMutation } from '../../../queries/exchange/exchange.mutation';
import { useIntervalExchangeRatio } from '../../../queries/forex/useForex.query';
import { exchange } from '../../../services/exchange/exchange.service';
import { useTransactionStore } from '../../../stores/transaction/transaction.store';
import { CurrencyISOType } from '../../../utils/currency/currency.util';
import { ExchangeBox } from './ExchangeBox';

export const ExchangeForm = () => {
    const {
        currencies,
        direction,
        directionReversed,
        toggleDirection,
        getDirectionLabel,
    } = useTransactionStore();
    const { data: ratio = 0 } = useIntervalExchangeRatio();
    const [currencyPrimary, currencySecondary] = currencies;
    const { mutateAsync, isLoading } = useExchangeMutation();

    const [values, setValues] = useState({
        [currencyPrimary]: 0,
        [currencySecondary]: 0,
    });

    const [errors, setErrors] = useState({
        [currencyPrimary]: false,
        [currencySecondary]: false,
    });

    // useEffect(() => {
    //     const [, to] = getCurrenciesInDirection();
    //     const value = values[to];
    //     const valueExchanged = exchange(value, ratio);

    //     setValues(prevState => ({
    //         ...prevState,
    //         [to]: valueExchanged,
    //     }));
    // }, [ratio, direction]);

    const hasErrors = Object.values(errors).some(e => e);
    const hasValues = Object.values(values).every(e => e);
    const isValid = hasValues && !hasErrors;
    const label = `${getDirectionLabel()} ${currencyPrimary} for ${currencySecondary}`;

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

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await mutateAsync({ values });
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

            <Button disabled={!isValid || isLoading}>{label}</Button>
        </form>
    );
};
