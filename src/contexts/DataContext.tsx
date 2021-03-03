import React, { createContext, ReactNode, useReducer, useState } from 'react';
import { QueryFunctionContext, useQuery } from 'react-query';

import { baseUrl, apiKey } from '../API';
import { LoginAction, SearchObject, SearchResponseType, VideosObject } from '../types';

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

// functiom to fetch channel details
/* const getChannels = async ({ queryKey }: QueryFunctionContext): Promise<any> => {
    const response = fetch(`${baseUrl.toString()}/channels?part=id&part=snippet&part=statistics&id=${queryKey[1]}`);

    const data = (await response).json();
    return data;
}; */

interface Props {
    children: ReactNode;
}

// actions to update state
const reducer = (term: string | null, { type, payload }: LoginAction) => {
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
    const [firstRender, setFirstRender] = useState(true);

    const searchQuery = useQuery(['search', term, searchOrder], getSearchResults, {
        refetchOnWindowFocus: false,
        enabled: !firstRender,
    });

    let videosIds: Array<string> = [];
    // let channelIds: Array<string> = [];

    searchQuery.data?.items.map((item: SearchResponseType) => {
        if (item.id.videoId) {
            videosIds.push(item.id.videoId);
        }
        /* if (item.snippet.channelId) {
            channelIds.push(item.snippet.channelId);
        } */

        return false;
    });

    const videosQuery = useQuery(['videos', videosIds], getVideos, {
        enabled: !!videosIds,
        refetchOnWindowFocus: false,
    });

    /* const channelsQuery = useQuery(['channels', channelIds], getChannels, {
        enabled: !!channelIds,
        refetchOnWindowFocus: false,
    }); */

    const contextValue = {
        searchOrder,
        setSearchOrder,
        searchQuery,
        videosQuery,
        term,
        dispatch,
        firstRender,
        setFirstRender,
    };
    return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};
