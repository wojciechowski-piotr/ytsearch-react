import { useState } from 'react';

import { QueryFunctionContext, useQuery } from 'react-query';

import Nav from './components/Nav';
import SearchBar from './components/SearchBar';

import { Wrapper } from './App.styles';
import { apiKey, baseUrl } from './API';

import ResultsList from './components/ResultsList';
import { SearchObject, SearchResponseType } from './types';

const getVideos = async ({ queryKey }: QueryFunctionContext): Promise<SearchObject> => {
    const response = fetch(
        `${baseUrl.toString()}/search?part=snippet&maxResults=20&order=${queryKey[2]}&q=${
            queryKey[1]
        }&regionCode=PL&relevanceLanguage=pl&type=video*videoDefinition=any&key=${apiKey}`
    );

    const data = (await response).json();
    return data;
};

const App = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [term, setTerm] = useState<string | null>('friz');
    const [searchOrder, setSearchOrder] = useState<Array<string>>(['date']);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        setTerm(inputValue);
    };

    const searchQuery = useQuery(['videos', term, searchOrder], getVideos, {
        refetchOnWindowFocus: false,
    });

    let videosIds: Array<string> = [];

    searchQuery.data?.items.map((item: SearchResponseType) => {
        if (item.id.videoId) {
            return videosIds.push(item.id.videoId);
        }

        return false;
    });

    console.log(videosIds);

    return (
        <>
            <Nav />
            <Wrapper fixed>
                <SearchBar term={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />
                {searchQuery.data && <ResultsList fetchedData={searchQuery.data?.items} />}
                {searchQuery.isLoading && <div>Loading...</div>}
                {searchQuery.error && <div>Something went wrong...</div>}
            </Wrapper>
        </>
    );
};

export default App;
