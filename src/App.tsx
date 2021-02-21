import { useState } from 'react';

import { QueryFunctionContext, useQuery } from 'react-query';

import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import ResultsItem from './components/ResultsItem';

import { Wrapper } from './App.styles';
import { baseUrl } from './API';

import searchData from './API/search-fake.json';
import ResultsList from './components/ResultsList';

const getVideos = async ({ queryKey }: QueryFunctionContext): Promise<Object> => {
    console.log(queryKey);

    // const response = fetch(`${baseUrl.toString()}`/);

    const response = fetch('/');

    const data = (await response).json();
    return data;
};

const App = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [term, setTerm] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        setTerm(inputValue);
    };

    /* const { isLoading, error, data } = useQuery(['videos', term], getVideos, {
        refetchOnWindowFocus: false,
    }); */

    console.log(term);

    return (
        <>
            <Nav />
            <Wrapper fixed>
                <SearchBar term={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />
                <ResultsList fetchedData={searchData.items} />
            </Wrapper>
        </>
    );
};

export default App;
