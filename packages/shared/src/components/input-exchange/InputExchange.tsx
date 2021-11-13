import React from 'react';
import styled from 'styled-components';
import { InputValue } from '../input-value/InputValue';

interface InputExchangeProps {
    balance: number;
    value?: number;
    currency: string;
    direction: 'In' | 'Out';
    hasError?: boolean;
    onChange: (value: number) => void;
}

export const InputExchange: React.FunctionComponent<InputExchangeProps> = ({
    balance,
    value,
    currency,
    direction,
    hasError,
    onChange,
}) => {
    return (
        <InputExchangeRoot>
            <InputExchangeGrid>
                <Currency>
                    <CurrencySelector>{currency}</CurrencySelector>
                </Currency>
                <Balance>Balance: {balance}</Balance>
                <Value>
                    <InputValue
                        value={value}
                        direction={direction}
                        onChange={onChange}
                    />
                </Value>
                <HelpText>
                    {hasError && <ErrorText>exceeds balance</ErrorText>}
                </HelpText>
            </InputExchangeGrid>
        </InputExchangeRoot>
    );
};

const InputExchangeRoot = styled.div(({ theme }) => ({
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: theme.colors.default.bgColor,
}));

const InputExchangeGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        'currency value'
        'balance help-text';
`;

const Currency = styled.div`
    grid-area: currency;
`;
const Balance = styled.div`
    grid-area: balance;
`;
const Value = styled.div`
    grid-area: value;
    text-align: right;
`;
const HelpText = styled.div`
    grid-area: help-text;
    text-align: right;
`;

const ErrorText = styled.span`
    color: ${props => props.theme.status.critical};
`;

const CurrencySelector = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
`;
