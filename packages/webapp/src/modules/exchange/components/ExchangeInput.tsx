import { InputValue } from '@exchanger/shared';
import React from 'react';
import styled from 'styled-components';
import { SelectCurrency } from '../../../components/select-currency/SelectCurrency';

interface ExchangeInputProps {
    balance?: string;
    value?: number;
    currency: string;
    direction: 'In' | 'Out';
    hasError?: boolean;
    onChange: (value: number) => void;
}

export const ExchangeInput: React.FunctionComponent<ExchangeInputProps> = ({
    balance,
    value,
    currency,
    direction,
    hasError,
    onChange,
}) => {
    return (
        <ExchangeInputRoot>
            <ExchangeInputGrid>
                <Currency>
                    <SelectCurrency selectedCurrency={currency} />
                </Currency>
                <Balance>
                    <HelpText>Balance: {balance}</HelpText>
                </Balance>
                <Value>
                    <InputValue
                        value={value}
                        direction={direction}
                        onChange={onChange}
                    />
                </Value>
                <Helper>
                    {hasError && <ErrorText>exceeds balance</ErrorText>}
                </Helper>
            </ExchangeInputGrid>
        </ExchangeInputRoot>
    );
};

const ExchangeInputRoot = styled.div(({ theme }) => ({
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: theme.colors.default.bgColor,
}));

const ExchangeInputGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        'currency value'
        'balance helper';
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

const HelpText = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    color: ${props => props.theme.colors.default.secondaryText};
    white-space: nowrap;
`;

const Helper = styled(HelpText)`
    grid-area: helper;
    text-align: right;
`;

const ErrorText = styled(HelpText)`
    color: ${props => props.theme.status.critical};
`;
