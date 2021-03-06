import { Fragment, useContext } from 'react';
import { Button, Typography } from '@material-ui/core';

import { DataContext } from '../../contexts/DataContext';

import { SearchResponseType } from '../../types';

import ResultsItem from '../ResultsItem';
import { Wrapper } from './ResultsList.styles';
import SortByButton from '../SortByButton';

const ResultsList = () => {
    const { searchQuery, videosQuery, term, firstRender } = useContext(DataContext);

    return (
        <Wrapper disableGutters={true}>
            <div className="topbar">
                {firstRender && 'No results yet.'}
                {term && (
                    <Typography component="span" color="textSecondary">
                        Results for&nbsp;
                        <Typography component="span" color="textPrimary">
                            <b>{term}</b>
                        </Typography>
                    </Typography>
                )}
                <SortByButton />
            </div>
            {searchQuery.status === 'loading'
                ? 'Loading...'
                : searchQuery.status === 'error'
                ? `Error: ${videosQuery.error.message}`
                : searchQuery.data &&
                  searchQuery.data.pages.map((page: any, index: number) => (
                      <Fragment key={index}>
                          {page.items.map((item: SearchResponseType) => (
                              <ResultsItem key={item.etag} videoId={item.id.videoId} />
                          ))}
                      </Fragment>
                  ))}
            {!firstRender && (
                <Button
                    className="more-btn"
                    onClick={() => searchQuery.fetchNextPage()}
                    disabled={!searchQuery.hasNextPage || searchQuery.isFetchingNextPage}
                >
                    {searchQuery.isFetchingNextPage ? 'Loading more...' : searchQuery.hasNextPage ? 'LOAD MORE' : 'Nothing more to load'}
                </Button>
            )}
        </Wrapper>
    );
};

export default ResultsList;
