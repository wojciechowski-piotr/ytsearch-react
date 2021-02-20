import { useState } from 'react';

import { QueryFunctionContext, useQuery } from 'react-query';

import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import ResultsItem from './components/ResultsItem';

import { Wrapper } from './App.styles';
import { baseUrl } from './API';

/* type VideoType = {
    publishedAt: string;
    title: string;
    thumbnail: string;
    videoId: string;
    channelId: string;
}; */

console.log(baseUrl);

const getVideos = async ({ queryKey }: QueryFunctionContext): Promise<Object> => {
    console.log(queryKey);

    const response = fetch(baseUrl.toString());

    // const response = fetch(`https://jsonplaceholder.typicode.com/users?name=${queryKey[1]}`);

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

    const { isLoading, error, data } = useQuery(['videos', term], getVideos, {
        refetchOnWindowFocus: false,
    });

    console.log(term);
    console.log(data);

    return (
        <>
            <Nav />
            <Wrapper fixed>
                <SearchBar term={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />
                <ResultsItem />
            </Wrapper>
        </>
    );
};

export default App;
