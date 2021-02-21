import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import { Wrapper } from './ResultsItem.styles';
import { SearchResponseType } from '../../types';

interface Props {
    item: SearchResponseType;
}

const ResultsItem = ({ item }: Props) => {
    console.log(item);

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
                        Views
                    </Typography>
                </CardContent>
            </Card>
        </Wrapper>
    );
};

export default ResultsItem;
