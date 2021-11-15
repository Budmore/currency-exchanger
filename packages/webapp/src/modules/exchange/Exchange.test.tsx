import { CustomThemeProvider } from '@exchanger/shared';
import { render } from '@testing-library/react';
import { Exchange } from './Exchange';

jest.mock('react-query', () => ({
    useQuery: () => ({ isLoading: false, error: {}, data: [] }),
    useMutation: () => ({ isLoading: false, error: {}, data: [] }),
}));

describe('Exchange', () => {
    it('should render', () => {
        const { getByTestId } = render(<Exchange />, {
            wrapper: CustomThemeProvider,
        });

        expect(getByTestId('title')).not.toBeNull();
    });
});
