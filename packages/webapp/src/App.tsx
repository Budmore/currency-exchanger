import { CustomThemeProvider } from '@exchanger/shared';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SessionInit } from './modules/session/SessionInit';
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
            <SessionInit />
            <ExchangeView />
        </CustomThemeProvider>
    </QueryClientProvider>
);
