import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';

import { DataContext } from '../../contexts/DataContext';

import { VideosResponseType } from '../../types';

import ResultsItem from '../ResultsItem';
import { Wrapper } from './ResultsList.styles';

const ResultsList = () => {
    const { videosQuery, term } = useContext(DataContext);

    return (
        <Wrapper>
            {videosQuery.isLoading && 'Loading...'}
            {videosQuery.error && 'Something went wrong...'}
            {videosQuery.data && (
                <Typography component='span' className='results-label'>
                    Results for <b>{term}</b>
                </Typography>
            )}
            {videosQuery.data && videosQuery.data.items.map((item: VideosResponseType) => <ResultsItem key={item.id} item={item} />)}
        </Wrapper>
    );
};

export default ResultsList;
