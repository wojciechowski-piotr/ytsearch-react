import { ComponentState, useState } from 'react';

import { useQuery } from 'react-query';

import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import ResultsItem from './components/ResultsItem';

import { Wrapper } from './App.styles';

/* type VideoType = {
    publishedAt: string;
    title: string;
    thumbnail: string;
    videoID: string;
}; */

const getVideos = async (term: any): Promise<Object> => {
    console.log(term);

    /* const response = fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&q=${term.queryKey[1]}&regionCode=PL&relevanceLanguage=pl&type=video&videoDefinition=any&key=AIzaSyAmQgPbNqesFslBXuLXy_v2Uz48o84wcts`
    ); */
    
    const response = fetch(`https://jsonplaceholder.typicode.com/users?name=${term.queryKey[1]}`);

    const data = (await response).json();
    return data;
};

const App = () => {
    const [term, setTerm] = useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value);
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
                <SearchBar term={term} handleChange={handleChange} />
                <ResultsItem />
            </Wrapper>
        </>
    );
};

export default App;
