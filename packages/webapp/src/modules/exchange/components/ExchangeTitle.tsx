import React from 'react';
import styled from 'styled-components';
import shallow from 'zustand/shallow';
import { useTransactionStore } from '../../../stores/transaction/transaction.store';

export const ExchangeTitle = () => {
    const { directionLabel, currencyPrimary } = useTransactionStore(
        state => ({
            directionLabel: state.getDirectionLabel(),
            currencyPrimary: state.currencies[0],
        }),
        shallow
    );

    return (
        <ExchangeTitleRoot data-testid="title">
            {directionLabel} {currencyPrimary}
        </ExchangeTitleRoot>
    );
};

const ExchangeTitleRoot = styled.h1`
    font-size: 32px;
    margin-bottom: 8px;
`;
