import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { useTheme } from '@material-ui/core/styles';

import Nav from './components/Nav';
import ResultsList from './components/ResultsList';

import { Wrapper } from './App.styles';

import { DataProvider } from './contexts/DataContext';

const App = () => {
    const muiTheme = useTheme();

    return (
        <SCThemeProvider theme={muiTheme}>
            <DataProvider>
                <Nav />
                <Wrapper fixed>
                    <ResultsList />
                </Wrapper>
            </DataProvider>
        </SCThemeProvider>
    );
};

export default App;
