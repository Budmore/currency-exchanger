import { useQuery } from 'react-query';
import { fetchExchangeRate } from '../../services/forex/forex.services';
import { useTransactionStore } from '../../stores/transaction/transaction.store';

const REFETCH_INTERVAL_MS = 10000;

export const useIntervalExchangeRatio = () => {
    const directionCurrencies = useTransactionStore(
        state => state.directionCurrencies
    );
    const [from, to] = directionCurrencies;
    const forexTicker = `C:${from}${to}`;

    return useQuery<number, Error>(
        ['forex', forexTicker],
        () => fetchExchangeRate(forexTicker),
        {
            refetchInterval: REFETCH_INTERVAL_MS,
            staleTime: REFETCH_INTERVAL_MS,
        }
    );
};
