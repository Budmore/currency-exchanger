import { act, renderHook } from '@testing-library/react-hooks';
import { useVaultStore } from './vault.store';

describe('walletStore', () => {
    describe('Initial Wallet', () => {
        it('should initial the vault', async () => {
            // GIVEN
            const { result, waitForNextUpdate } = renderHook(() =>
                useVaultStore()
            );

            // WHEN
            result.current.init();
            await waitForNextUpdate();

            // THEN
            expect(result.current.getWallet('USD')).toBeDefined();
        });
    });
    describe('Operation on a wallet', () => {
        it('should set/get wallet', () => {
            // GIVEN
            const { result } = renderHook(() => useVaultStore());

            // WHEN
            act(() => {
                result.current.createWallet('USD');
                result.current.createWallet('PLN');
            });

            // THEN
            expect(result.current.getWallet('USD')).toBeDefined();
            expect(result.current.getWallet('PLN')).toBeDefined();
        });

        it('should set/get balance', () => {
            // GIVEN
            const { result } = renderHook(() => useVaultStore());

            // WHEN
            act(() => {
                result.current.createWallet('EUR', 100);
            });

            // THEN
            expect(result.current.getBalance('EUR')).toEqual(100);
        });

        it('should add value to a balance', () => {
            // GIVEN
            const { result } = renderHook(() => useVaultStore());

            // WHEN
            act(() => {
                result.current.createWallet('EUR', 0.1);
                result.current.add('EUR', 0.2);
            });

            // THEN
            expect(result.current.getBalance('EUR')).toEqual(0.3);
        });

        it('should subtract value from the balance', () => {
            // GIVEN
            const { result } = renderHook(() => useVaultStore());

            // WHEN
            act(() => {
                result.current.createWallet('GBP', 0.03);
                result.current.subtract('GBP', 0.02);
            });

            // THEN
            expect(result.current.getBalance('GBP')).toEqual(0.01);
        });
    });
});
