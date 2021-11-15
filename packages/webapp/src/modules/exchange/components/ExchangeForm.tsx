import { ArrowUp, Button } from '@exchanger/shared';
import { FormEvent, useState } from 'react';
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
        <Form onSubmit={onSubmit}>
            <GridItem gridArea="primary">
                <ExchangeBox
                    currency={currencyPrimary}
                    direction={direction}
                    value={values[currencyPrimary]}
                    onChange={onChange(currencyPrimary)}
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
                    value={values[currencySecondary]}
                    onChange={onChange(currencySecondary)}
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
