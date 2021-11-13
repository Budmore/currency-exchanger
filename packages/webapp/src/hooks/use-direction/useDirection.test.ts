import { act, renderHook } from '@testing-library/react-hooks';
import { useDirection } from './useDirection';

describe('useDirection()', () => {
    it('should have proper default values', () => {
        // GIVEN
        const { result } = renderHook(() => useDirection());

        // THEN
        expect(result.current.direction).toEqual('Out');
        expect(result.current.directionReversed).toEqual('In');
        expect(result.current.isDirectionOut).toEqual(true);
    });

    it('should toggle values', () => {
        // GIVEN
        const { result } = renderHook(() => useDirection());

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
