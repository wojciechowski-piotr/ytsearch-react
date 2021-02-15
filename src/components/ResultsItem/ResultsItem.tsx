import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import { Wrapper } from './ResultsItem.styles';

interface Props {}

const ResultsItem = (props: Props) => {
    return (
        <Wrapper>
            <Card className="card-root">
                <CardMedia
                    component="img"
                    image="https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2019/06/YouTube-Thumbnail-Sizes.png"
                    title="alt text"
                />
                <CardContent>
                    <Typography variant="h6">Youtube video title</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Views
                    </Typography>
                </CardContent>
            </Card>
        </Wrapper>
    );
};

export default ResultsItem;
