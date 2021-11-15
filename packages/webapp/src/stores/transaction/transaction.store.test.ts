import { act, renderHook } from '@testing-library/react-hooks';
import { useTransactionStore } from './transaction.store';

describe('useTransactionStore()', () => {
    it('should have proper default values', () => {
        // GIVEN
        const { result } = renderHook(() => useTransactionStore());

        // THEN
        expect(result.current.direction).toEqual('Out');
        expect(result.current.directionReversed).toEqual('In');
    });

    it('should toggle values', () => {
        // GIVEN
        const { result } = renderHook(() => useTransactionStore());

        // WHEN
        act(() => {
            result.current.toggleDirection();
        });

        // THEN
        expect(result.current.direction).toEqual('In');
        expect(result.current.directionReversed).toEqual('Out');
    });

    it('should have proper default values', () => {
        // GIVEN
        const { result } = renderHook(() => useTransactionStore());
        const { getCurrenciesInDirection } = result.current;
        // WHEN
        act(() => {
            expect(getCurrenciesInDirection()).toEqual(['GBP', 'USD']);
            result.current.toggleDirection();
        });

        // THEN
        expect(getCurrenciesInDirection()).toEqual(['USD', 'GBP']);
    });
});
