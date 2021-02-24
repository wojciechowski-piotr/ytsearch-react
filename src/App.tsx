import { useState } from 'react';

import { QueryFunctionContext, useQuery } from 'react-query';

import Nav from './components/Nav';
import SearchBar from './components/SearchBar';

import { Wrapper } from './App.styles';
import { baseUrl, apiKey } from './API';

import ResultsList from './components/ResultsList';
import { SearchObject, SearchResponseType, VideosObject } from './types';

const getSearchResults = async ({ queryKey }: QueryFunctionContext): Promise<SearchObject> => {
    const response = fetch(
        `${baseUrl.toString()}/search?part=snippet&maxResults=20&order=${queryKey[2]}&q=${
            queryKey[1]
        }&regionCode=PL&relevanceLanguage=pl&type=video*videoDefinition=any&key=${apiKey}`
    );

    const data = (await response).json();
    return data;
};

const getVideos = async ({ queryKey }: QueryFunctionContext): Promise<VideosObject> => {
    const response = fetch(
        `${baseUrl.toString()}/videos?part=id&part=statistics&part=snippet&id=${queryKey[1]}&regionCode=PL&key=${apiKey}`
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

    const searchQuery = useQuery(['search', term, searchOrder], getSearchResults, {
        refetchOnWindowFocus: false,
    });

    let videosIds: Array<string> = [];

    searchQuery.data?.items.map((item: SearchResponseType) => {
        if (item.id.videoId) {
            return videosIds.push(item.id.videoId);
        }

        return false;
    });

    const videosQuery = useQuery(['videos', videosIds], getVideos, {
        enabled: !!videosIds,
        refetchOnWindowFocus: false,
    });

/*     console.log(videosIds);
    console.log(videosQuery.data); */

    return (
        <>
            <Nav />
            <Wrapper fixed>
                <SearchBar term={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />
                {videosQuery.data && <ResultsList fetchedData={videosQuery.data?.items} />}
                {videosQuery.isLoading && <div>Loading...</div>}
                {videosQuery.error && <div>Something went wrong...</div>}
            </Wrapper>
        </>
    );
};

export default App;
