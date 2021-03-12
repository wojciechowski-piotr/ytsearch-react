import ReactDOM from 'react-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import App from './App';

import theme from './theme';

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </QueryClientProvider>,
    document.getElementById('root')
);
