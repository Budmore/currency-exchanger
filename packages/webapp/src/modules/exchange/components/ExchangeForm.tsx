import { ArrowUp, Button } from '@exchanger/shared';
import { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useExchangeMutation } from '../../../queries/exchange/exchange.mutation';
import { useIntervalExchangeRatio } from '../../../queries/forex/useForex.query';
import { exchange } from '../../../services/exchange/exchange.service';
import { useTransactionStore } from '../../../stores/transaction/transaction.store';
import { CurrencyISOType } from '../../../utils/currency/currency.util';
import { Direction } from '../../../utils/direction/direction.util';
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

    const [values, setValues] = useState<{ [x: string]: number }>({
        primary: 0,
        secondary: 0,
    });

    const [errors, setErrors] = useState({
        [currencyPrimary]: false,
        [currencySecondary]: false,
    });

    const initForm = () => {
        setValues({
            primary: 0,
            secondary: 0,
        });
    };

    useEffect(() => {
        if (direction === Direction.Out) {
            setValues(prevState => {
                if (!prevState.primary) {
                    return prevState;
                }

                return {
                    ...prevState,
                    secondary: exchange(prevState.primary, ratio),
                };
            });
        } else {
            setValues(prevState => {
                if (!prevState.secondary) {
                    return prevState;
                }

                return {
                    ...prevState,
                    primary: exchange(prevState.secondary, ratio),
                };
            });
        }
    }, [direction, ratio]);

    const hasErrors = Object.values(errors).some(e => e);
    const hasValues = Object.values(values).every(e => e);
    const hasSameCurrencies = currencyPrimary === currencySecondary;
    const isValid = hasValues && !hasErrors && !hasSameCurrencies;
    const label = `${getDirectionLabel()} ${currencyPrimary} for ${currencySecondary}`;

    const onError = (currency: CurrencyISOType) => (hasError: boolean) => {
        setErrors(prevState => ({
            ...prevState,
            [currency]: hasError,
        }));
    };

    const onChange = (currency: 'primary' | 'secondary') => (value: number) => {
        const otherCurrency = currency === 'primary' ? 'secondary' : 'primary';
        const valueExchanged = exchange(value, ratio);

        setValues({
            [currency]: value,
            [otherCurrency]: valueExchanged,
        });
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const _values = [values.primary, values.secondary];
        const valuesInOrder =
            direction === Direction.Out ? _values : _values.reverse();
        await mutateAsync({ values: valuesInOrder });
        initForm();
    };

    return (
        <Form onSubmit={onSubmit}>
            <GridItem gridArea="primary">
                <ExchangeBox
                    currency={currencyPrimary}
                    direction={direction}
                    value={values.primary}
                    onChange={onChange('primary')}
                    onError={onError(currencyPrimary)}
                />
            </GridItem>
            <ToggleButton>
                <IconButton
                    isOut={direction === Direction.Out}
                    color="secondary"
                    variant="icon"
                    type="button"
                    onClick={toggleDirection}
                >
                    <ArrowUp />
                </IconButton>
            </ToggleButton>
            <GridItem gridArea="secondary">
                <ExchangeBox
                    currency={currencySecondary}
                    direction={directionReversed}
                    value={values.secondary}
                    onChange={onChange('secondary')}
                    onError={onError(currencySecondary)}
                />
            </GridItem>
            <SubmitButton>
                <Button disabled={!isValid || isLoading}>{label}</Button>
            </SubmitButton>
        </Form>
    );
};

const Form = styled.form`
    display: grid;
    grid-template-areas:
        'primary'
        'toggle'
        'secondary';

    @media only screen and (min-width: 768px) {
        grid-row-gap: 32px;
        grid-template-columns: 1fr 50px 1fr;
        grid-template-areas:
            'primary toggle secondary'
            'submit submit submit';
    }
`;

const GridItem = styled.div<{ gridArea: string }>`
    grid-area: ${props => props.gridArea};
`;

const ToggleButton = styled.div`
    grid-area: toggle;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;

    @media only screen and (min-width: 768px) {
        height: auto;
    }
`;

const SubmitButton = styled.div`
    margin-top: 32px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    @media only screen and (min-width: 768px) {
        position: static;
        grid-area: submit;
    }
`;
const IconButton = styled(Button)<{ isOut: boolean }>`
    width: 30px;
    height: 30px;
    outline: solid 5px #f2f2f2;
    background-color: #fff;
    border-radius: 100%;
    transform: ${props => (props.isOut ? 'rotate(180deg)' : 'rotate(0)')};
    z-index: 1;
    transform-origin: center center;
    padding: 0;

    @media only screen and (min-width: 768px) {
        transform: ${props =>
            props.isOut ? 'rotate(90deg)' : 'rotate(270deg)'};
    }
`;
