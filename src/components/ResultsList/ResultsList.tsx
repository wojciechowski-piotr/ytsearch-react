import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';

import { DataContext } from '../../contexts/DataContext';

import { VideosResponseType } from '../../types';

import ResultsItem from '../ResultsItem';
import { Wrapper } from './ResultsList.styles';

const ResultsList = () => {
    const { videosQuery, term, firstRender } = useContext(DataContext);

    return (
        <Wrapper>
            {firstRender && 'No results yet.'}
            {term && (
                <Typography component="span" className="results-label" color="textSecondary">
                    Results for{' '}
                    <Typography component="span" color="textPrimary">
                        <b>{term}</b>
                    </Typography>
                </Typography>
            )}
            {videosQuery.isLoading && 'Loading...'}
            {videosQuery.error && 'Something went wrong...'}
            {videosQuery.data && videosQuery.data.items.map((item: VideosResponseType) => <ResultsItem key={item.id} item={item} />)}
        </Wrapper>
    );
};

export default ResultsList;
