import { fetchVault } from './vault.service';

describe('vault.service.ts', () => {
    it('should fetch mock data', async () => {
        const results = await fetchVault();
        expect(results.data.length).toEqual(4);
    });
});
