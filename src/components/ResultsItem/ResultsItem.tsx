import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import { Wrapper } from './ResultsItem.styles';
import { VideosResponseType } from '../../types';

interface Props {
    item: VideosResponseType;
}

const ResultsItem = ({ item }: Props) => {

    return (
        <Wrapper>
            <Card className="card-root">
                <CardMedia
                    component="img"
                    image={item.snippet.thumbnails.high.url}
                    title="alt text"
                />
                <CardContent>
                    <Typography variant="h6">
                        <span dangerouslySetInnerHTML={{__html: item.snippet.title}} />
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Views: {item.statistics.viewCount} &#8901; publishedAt: {item.snippet.publishedAt}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Channel title
                    </Typography>
                </CardContent>
            </Card>
        </Wrapper>
    );
};

export default ResultsItem;
