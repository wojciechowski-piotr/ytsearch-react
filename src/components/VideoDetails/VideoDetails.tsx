import React from 'react';

import { QueryFunctionContext, useQuery } from 'react-query';

import { baseUrl } from '../../API';
import { VideosObject } from '../../types';

import { Wrapper } from './VideoDetails.styles';

interface Props {
    match: {
        params: {
            id: String;
        };
    };
}

const getVideo = async ({ queryKey }: QueryFunctionContext): Promise<VideosObject> => {
    const response = fetch(
        `${baseUrl.toString()}/videos?part=id&part=statistics&part=snippet&id=${queryKey[1]}&regionCode=PL&key=${
            process.env.REACT_APP_API_KEY
        }`
    );

    const data = (await response).json();

    return data;
};

const VideoDetails = ({ match }: Props) => {
    const { isError, data } = useQuery(['videoDetails', match.params.id], getVideo, {
        refetchOnWindowFocus: false,
    });

    console.log(match);

    return (
        <Wrapper>
            <h2>{data?.items[0].snippet.title}</h2>
        </Wrapper>
    );
};

export default VideoDetails;
