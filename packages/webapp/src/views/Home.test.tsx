import { render } from '@testing-library/react';
import { Home } from './Home';

describe('Home', () => {
    it('should render', () => {
        const { queryByText } = render(<Home />);
        expect(queryByText('up3')).not.toBeNull();
    });
});
