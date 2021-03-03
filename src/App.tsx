import Nav from './components/Nav';
import ResultsList from './components/ResultsList';

import { Wrapper } from './App.styles';

import { DataProvider } from './contexts/DataContext';

const App = () => {
    return (
        <DataProvider>
            <Nav />
            <Wrapper fixed>
                <ResultsList />
            </Wrapper>
        </DataProvider>
    );
};

export default App;
