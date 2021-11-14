// Source: https://github.com/pmndrs/zustand/wiki/Testing
import { act } from '@testing-library/react-hooks';
import actualCreate, { StateCreator } from 'zustand';

const storeResetFns = new Set<() => void>();

const create = (createState: StateCreator<any>) => {
    const store = actualCreate(createState);
    const initialState = store.getState();
    storeResetFns.add(() => store.setState(initialState, true));
    return store;
};

afterEach(() => {
    act(() => storeResetFns.forEach(resetFn => resetFn()));
});

export default create;
