import { Typography } from '@material-ui/core';
import format from 'date-fns/format';
import React from 'react';

import { QueryFunctionContext, useQuery } from 'react-query';

import { baseUrl } from '../../API';
import { VideosObject } from '../../types';
import numFormatter from '../../utils/numConvert';

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

    return (
        <Wrapper>
            {isError && 'Something went wrong, try again later.'}
            {data && (
                <>
                    <div className="player">
                        <iframe
                            src={`https://www.youtube.com/embed/${match.params.id}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="infos">
                        <Typography color="textSecondary">
                            Views: {numFormatter(data?.items[0].statistics.viewCount)} &#8901;{' '}
                            {format(new Date(data?.items[0].snippet.publishedAt), 'd MMM yyyy')}
                        </Typography>
                        <Typography component="h2" variant="h5">
                            {data?.items[0].snippet.title}
                        </Typography>
                        {/* <span dangerouslySetInnerHTML={{ __html: data?.items[0].snippet.description }} /> */}
                        <span className="infos__desc" dangerouslySetInnerHTML={{__html: data?.items[0].snippet.description }} />
                    </div>
                </>
            )}
        </Wrapper>
    );
};

export default VideoDetails;
