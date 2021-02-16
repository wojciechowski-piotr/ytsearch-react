import ReactDOM from 'react-dom';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './App';
import theme from './theme';

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
    document.getElementById('root')
);
