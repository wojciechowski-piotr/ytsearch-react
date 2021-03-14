import { CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import { format } from 'date-fns';

import { SCCard, SCTypography } from './ResultsItem.styles';
import { VideosObject } from '../../types';
import numFormatter from '../../utils/numConvert';
import { QueryFunctionContext, useQuery } from 'react-query';
import { baseUrl } from '../../API';

interface Props {
    videoId: string;
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

const ResultsItem = ({ videoId }: Props) => {
    const { isError, data } = useQuery(['videoDetails', videoId], getVideo, {
        refetchOnWindowFocus: false,
        enabled: !!videoId,
    });

    return (
        <>
            {isError && 'Error!'}
            {data && (
                <SCCard square={true} elevation={0}>
                    <CardActionArea component="div">
                        <div className="card-grid">
                            <CardMedia component="img" image={data?.items[0].snippet.thumbnails.high.url} title="alt text" />
                            <CardContent>
                                <SCTypography variant="h6">
                                    <span dangerouslySetInnerHTML={{ __html: data?.items[0].snippet.title }} />
                                </SCTypography>
                                <SCTypography variant="subtitle1" color="textSecondary">
                                    <div className="secondary-label">
                                        Views: {numFormatter(data?.items[0].statistics.viewCount)} &#8901;{' '}
                                        {format(new Date(data?.items[0].snippet.publishedAt), 'd MMM yyyy')}
                                    </div>
                                </SCTypography>
                                <SCTypography variant="subtitle1" color="textSecondary">
                                    <div className="secondary-label">{data?.items[0].snippet.channelTitle}</div>
                                </SCTypography>
                            </CardContent>
                        </div>
                    </CardActionArea>
                </SCCard>
            )}
        </>
    );
};

export default ResultsItem;
