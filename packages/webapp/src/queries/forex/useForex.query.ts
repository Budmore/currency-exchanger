import { useQuery } from 'react-query';
import { fetchExchangeRate } from '../../services/forex/forex.services';
import { useTransactionStore } from '../../stores/transaction/transaction.store';

const REFETCH_INTERVAL_MS = 30000;

export const useIntervalExchangeRatio = () => {
    const [from, to] = useTransactionStore(state =>
        state.getCurrenciesInDirection()
    );
    const forexTicker = `C:${from}${to}`;

    return useQuery<number, Error>(
        ['forex', forexTicker],
        () => fetchExchangeRate(forexTicker),
        {
            refetchInterval: REFETCH_INTERVAL_MS,
            staleTime: REFETCH_INTERVAL_MS,
            enabled: from === to,
        }
    );
};
