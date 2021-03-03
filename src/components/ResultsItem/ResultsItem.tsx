import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { format } from 'date-fns';

import { Wrapper } from './ResultsItem.styles';
import { VideosResponseType } from '../../types';
import numFormatter from '../../utils/numConvert';

interface Props {
    item: VideosResponseType;
}

const ResultsItem = ({ item }: Props) => {
    return (
        <Wrapper>
            <Card className="card-root">
                <CardMedia component="img" image={item.snippet.thumbnails.high.url} title="alt text" />
                <CardContent>
                    <Typography variant="h6">
                        <span dangerouslySetInnerHTML={{ __html: item.snippet.title }} />
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Views: {numFormatter(item.statistics.viewCount)} &#8901; {format(new Date(item.snippet.publishedAt), 'd MMM yyyy')}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {item.snippet.channelTitle}
                    </Typography>
                </CardContent>
            </Card>
        </Wrapper>
    );
};

export default ResultsItem;
