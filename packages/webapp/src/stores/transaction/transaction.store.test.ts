import { act, renderHook } from '@testing-library/react-hooks';
import { useTransactionStore } from './transaction.store';

describe('useDirection()', () => {
    it('should have proper default values', () => {
        // GIVEN
        const { result } = renderHook(() => useTransactionStore());

        // THEN
        expect(result.current.direction).toEqual('Out');
        expect(result.current.directionReversed).toEqual('In');
        expect(result.current.isDirectionOut).toEqual(true);
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
        expect(result.current.isDirectionOut).toEqual(false);
    });
});
