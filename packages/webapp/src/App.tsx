import { CustomThemeProvider } from '@exchanger/shared';
import { QueryClientProvider } from 'react-query';
import { SessionInit } from './modules/session/SessionInit';
import { queryClient } from './queries/query-client/queryClient';
import { ExchangeView } from './views/Exchange.view';

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <CustomThemeProvider>
            <SessionInit />
            <ExchangeView />
        </CustomThemeProvider>
    </QueryClientProvider>
);
