import { useEffect } from 'react';
import { useVaultStore } from '../../stores/vault/vault.store';

export const SessionInit = () => {
    const init = useVaultStore(state => state.init);

    useEffect(() => {
        init();
    });

    return null;
};
