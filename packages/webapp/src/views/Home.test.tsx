import { CustomThemeProvider } from '@exchanger/shared';
import { render } from '@testing-library/react';
import { Home } from './Home';

describe('Home', () => {
    it('should render', () => {
        const { queryByText } = render(<Home />, { wrapper: CustomThemeProvider });

        expect(queryByText('Hello World')).not.toBeNull();
    });
});
