import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useIntervalExchangeRatio } from '../../../queries/forex/useForex.query';
import {
    CurrencyISOType,
    formatPriceWithCurrency,
} from '../../../utils/currency/currency.util';

interface RatioProps {
    currencies: CurrencyISOType[];
}

export const Ratio: React.FunctionComponent<RatioProps> = ({
    currencies: [from, to],
}) => {
    const { data: ratio, isLoading, error } = useIntervalExchangeRatio();
    const label = useMemo(() => {
        const fromCurrency = formatPriceWithCurrency(1, from, 0);
        const toCurrency = !!ratio && formatPriceWithCurrency(ratio, to, 4);
        return `${fromCurrency} = ${toCurrency}`;
    }, [ratio, from, to]);

    return (
        <RatioRoot>
            {!!ratio && <Label>{label}</Label>}
            {isLoading && <span>Loading</span>}
            {error && <ErrorText>{error.message}</ErrorText>}
        </RatioRoot>
    );
};

const RatioRoot = styled.div`
    margin-bottom: 16px;
`;

const Label = styled.span`
    color: ${props => props.theme.colors.brand.bgColor};
    font-weight: 600;
    margin-right: 8px;
`;
const ErrorText = styled.span`
    color: ${props => props.theme.status.critical};
    font-size: 12px;
`;
