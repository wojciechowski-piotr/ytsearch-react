import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import { Wrapper } from './App.styles';
import ResultsItem from './components/ResultsItem';

const App = () => {
    return (
        <>
            <Nav />
            <Wrapper fixed>
                <SearchBar />
                <ResultsItem />
            </Wrapper>
        </>
    );
};

export default App;
