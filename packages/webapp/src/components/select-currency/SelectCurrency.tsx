import { ChevronDown, Dropdown } from '@exchanger/shared';
import { useState } from 'react';
import styled from 'styled-components';
import { useTransactionStore } from '../../stores/transaction/transaction.store';
import { CurrencyISO } from '../../utils/currency/currency.util';

interface SelectCurrencyProps {
    selectedCurrency: string;
}

export const SelectCurrency = ({ selectedCurrency }: SelectCurrencyProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const setCurrencies = useTransactionStore(state => state.setCurrencies);
    const items = Object.keys(CurrencyISO).map(key => ({
        id: key,
        label: key,
    }));

    const onSelect = (nextCurrency: string) => {
        setCurrencies(selectedCurrency, nextCurrency);
        setIsOpen(false);
    };

    return (
        <SelectCurrencyRoot>
            <Dropdown
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                label={
                    <CurrencySelector>
                        <Label>{selectedCurrency}</Label>
                        <ChevronDown />
                    </CurrencySelector>
                }
                items={items}
                renderItem={item => (
                    <ItemButton
                        key={item.id}
                        isSelected={item.id === selectedCurrency}
                        onClick={() => onSelect(item.id)}
                    >
                        {item.label}
                    </ItemButton>
                )}
            />
        </SelectCurrencyRoot>
    );
};

const SelectCurrencyRoot = styled.div`
    display: flex;
    position: relative;
`;

const CurrencySelector = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin-right: 8px;
`;

const ItemButton = styled.button<{ isSelected: boolean }>`
    padding: 8px 24px;
    font-size: 22px;
    width: 100%;
    background: transparent;
    border: 0;
    cursor: pointer;
    color: ${props => props.isSelected && props.theme.colors.default.accent};

    &:hover {
        background: #f7f7f7;
    }

    &:active {
        color: ${props => props.theme.colors.default.accent};
    }
`;
