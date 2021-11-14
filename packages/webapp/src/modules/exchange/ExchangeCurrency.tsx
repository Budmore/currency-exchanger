import { InputExchange } from '@exchanger/shared';
import { useEffect } from 'react';
import { useVaultStore } from '../../stores/vault/vault.store';
import { CurrencyISOType } from '../../utils/currency/currency.util';
import {
    DirectionType,
    willExceedBalance,
} from '../../utils/direction/direction.util';

interface ExchangeCurrencyProps {
    currency: CurrencyISOType;
    direction: DirectionType;
    value: number;
    onChange: (value: number) => void;
    onError: (hasError: boolean) => void;
}

export const ExchangeCurrency = ({
    currency,
    direction,
    value,
    onChange,
    onError,
}: ExchangeCurrencyProps) => {
    const { getBalanceFormatted, getBalance } = useVaultStore(state => ({
        getBalanceFormatted: state.getBalanceFormatted,
        getBalance: state.getBalance,
    }));

    const hasError = willExceedBalance({
        direction,
        value: value,
        balance: getBalance(currency),
    });

    useEffect(() => {
        onError(hasError);

        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [hasError]);

    return (
        <InputExchange
            currency={currency}
            direction={direction}
            value={value}
            onChange={onChange}
            hasError={hasError}
            balance={getBalanceFormatted(currency)}
        />
    );
};
