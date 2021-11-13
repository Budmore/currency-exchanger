import { CustomThemeProvider } from '@exchanger/shared';
import { render } from '@testing-library/react';
import { ExchangeView } from './Exchange.view';

describe('ExchangeView', () => {
    it('should render', () => {
        const { getByTestId } = render(<ExchangeView />, {
            wrapper: CustomThemeProvider,
        });

        expect(getByTestId('title')).not.toBeNull();
    });
});
