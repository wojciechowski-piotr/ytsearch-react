import { Fragment, useContext } from 'react';
import { Button, Typography } from '@material-ui/core';

import { DataContext } from '../../contexts/DataContext';

import { SearchResponseType } from '../../types';

import ResultsItem from '../ResultsItem';
import { Wrapper } from './ResultsList.styles';

const ResultsList = () => {
    const { searchQuery, videosQuery, term, firstRender } = useContext(DataContext);

    return (
        <Wrapper>
            {firstRender && 'No results yet.'}
            {term && (
                <Typography component="span" className="results-label" color="textSecondary">
                    Results for&nbsp;
                    <Typography component="span" color="textPrimary">
                        <b>{term}</b>
                    </Typography>
                </Typography>
            )}
            {searchQuery.status === 'loading'
                ? 'Loading...'
                : searchQuery.status === 'error'
                ? `Error: ${videosQuery.error.message}`
                : searchQuery.data &&
                searchQuery.data.pages.map((page: any) => (
                      <Fragment key={page.nextId}>
                          {page.items.map((item: SearchResponseType) => (
                              <ResultsItem key={item.etag} videoId={item.id.videoId} />
                          ))}
                      </Fragment>
                  ))}
            <Button onClick={() => searchQuery.fetchNextPage()} disabled={!searchQuery.hasNextPage || searchQuery.isFetchingNextPage}>
                {searchQuery.isFetchingNextPage ? 'Loading more...' : searchQuery.hasNextPage ? 'LOAD MORE' : 'Nothing more to load'}
            </Button>
        </Wrapper>
    );
};

export default ResultsList;
