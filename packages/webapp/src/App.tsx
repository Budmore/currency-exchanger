import { CustomThemeProvider } from '@exchanger/shared';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import { ExchangeView } from './views/Exchange.view';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <CustomThemeProvider>
            <ExchangeView />
        </CustomThemeProvider>
    </QueryClientProvider>
);
