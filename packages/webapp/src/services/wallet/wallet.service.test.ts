import { createWallet } from './wallet.service';

describe('Wallet service', () => {
    describe('add()', () => {
        it('should NOT add a value', () => {
            // GIVEN
            const wallet = createWallet({ balance: 10 });

            // WHEN
            wallet.add(-10);

            // THEN
            expect(wallet.getBalance()).toEqual(10);
        });
        it('should add a value', () => {
            // GIVEN
            const wallet = createWallet({ balance: 0 });

            // WHEN
            wallet.add(10);

            // THEN
            expect(wallet.getBalance()).toEqual(10);
        });
    });

    describe('subtract()', () => {
        it('should subtract a value', () => {
            // GIVEN
            const wallet = createWallet({ balance: 10 });

            // WHEN
            wallet.subtract(10);

            // THEN
            expect(wallet.getBalance()).toEqual(0);
        });

        it('should subtract a value', () => {
            // GIVEN
            const wallet = createWallet({ balance: 10 });

            // WHEN
            wallet.subtract(10);

            // THEN
            expect(wallet.getBalance()).toEqual(0);
        });
    });
});
