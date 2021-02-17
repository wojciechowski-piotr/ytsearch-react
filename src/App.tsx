import { ComponentState, ReactText, useState } from 'react';

import { Query, QueryFunction, QueryFunctionContext, QueryKey, useQuery } from 'react-query';

import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import ResultsItem from './components/ResultsItem';

import { Wrapper } from './App.styles';

/* type VideoType = {
    publishedAt: string;
    title: string;
    thumbnail: string;
    videoId: string;
    channelId: string;
}; */

const getVideos = async ({ queryKey }: QueryFunctionContext): Promise<Object> => {
    console.log(queryKey);

    /* const response = fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&q=${queryKey[1]}&regionCode=PL&relevanceLanguage=pl&type=video&videoDefinition=any&key=AIzaSyAmQgPbNqesFslBXuLXy_v2Uz48o84wcts`
    ); */

    const response = fetch(`https://jsonplaceholder.typicode.com/users?name=${queryKey[1]}`);

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
