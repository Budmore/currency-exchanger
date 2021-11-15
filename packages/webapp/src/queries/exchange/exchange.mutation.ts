import { useMutation } from 'react-query';
import {
    RequestVariables,
    setExchange,
    SuccessResponse,
} from '../../services/exchange/exchange.service';
import { useTransactionStore } from '../../stores/transaction/transaction.store';
import { useVaultStore } from '../../stores/vault/vault.store';

export const useExchangeMutation = () => {
    const currenciesInDirection = useTransactionStore(state =>
        state.getCurrenciesInDirection()
    );
    const { add, subtract } = useVaultStore();

    return useMutation<SuccessResponse, Error, RequestVariables>(setExchange, {
        onSuccess: ({ values }) => {
            const [from, to] = currenciesInDirection;
            const [fromValue, toValue] = values;

            subtract(from, fromValue);
            add(to, toValue);
        },
    });
};
