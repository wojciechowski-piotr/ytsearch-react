import React from 'react';
import { SearchResponseType } from '../../types';
import ResultsItem from '../ResultsItem';
import { Wrapper } from './ResultsList.styles';

interface Props {
    fetchedData: Array<SearchResponseType | any>;
}

const ResultsList = ({ fetchedData }: Props) => {
    return (
        <Wrapper>
            {fetchedData.map((item: SearchResponseType) => (
                <ResultsItem key={item.videoId} item={item} />
            ))}
        </Wrapper>
    );
};

export default ResultsList;
