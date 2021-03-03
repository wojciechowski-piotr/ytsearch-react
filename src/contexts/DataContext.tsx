import React, { createContext, ReactNode, useReducer, useState } from 'react';
import { QueryFunctionContext, useQuery } from 'react-query';

import { baseUrl, apiKey } from '../API';
import { SearchObject, SearchResponseType, VideosObject } from '../types';

export const DataContext = createContext<Partial<any>>({});

// functiom to fetch search results
const getSearchResults = async ({ queryKey }: QueryFunctionContext): Promise<SearchObject> => {
    const response = fetch(
        `${baseUrl.toString()}/search?part=snippet&maxResults=20&order=${queryKey[2]}&q=${
            queryKey[1]
        }&regionCode=PL&relevanceLanguage=pl&type=video*videoDefinition=any&key=${apiKey}`
    );

    const data = (await response).json();
    return data;
};

// functiom to fetch video details
const getVideos = async ({ queryKey }: QueryFunctionContext): Promise<VideosObject> => {
    const response = fetch(
        `${baseUrl.toString()}/videos?part=id&part=statistics&part=snippet&id=${queryKey[1]}&regionCode=PL&key=${apiKey}`
    );

    const data = (await response).json();
    return data;
};

interface Props {
    children: ReactNode;
}

// actions to update state
const reducer = (term: string | null, { type, payload }: any) => {
    switch (type) {
        case 'UPDATE':
            return payload;

        default:
            return term;
    }
};

export const DataProvider = ({ children }: Props) => {
    const [searchOrder, setSearchOrder] = useState<Array<string>>(['date']);
    const [term, dispatch] = useReducer(reducer, '');

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

    const contextValue = {
        searchOrder,
        setSearchOrder,
        searchQuery,
        videosQuery,
        term,
        dispatch,
    };
    return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};
