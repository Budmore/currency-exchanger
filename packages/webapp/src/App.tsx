import { QueryClient, QueryClientProvider } from 'react-query';
// import { CustomThemeProvider } from '@exchanger/components/index';

import './index.css';

import { Home } from './views/Home';

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
        {/* <CustomThemeProvider> */}
        <Home />
        {/* </CustomThemeProvider> */}
    </QueryClientProvider>
);
