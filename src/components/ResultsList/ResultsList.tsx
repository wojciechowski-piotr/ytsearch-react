import React from 'react';
import { SearchResponseType } from '../../types';
import ResultsItem from '../ResultsItem';
import { Wrapper } from './ResultsList.styles';

interface Props {
    fetchedData: any[];
}

const ResultsList = ({ fetchedData }: Props) => {
    return (
        <Wrapper>
            {fetchedData.map((item: SearchResponseType) => (
                <ResultsItem key={item.id.videoId} item={item} />
            ))}
        </Wrapper>
    );
};

export default ResultsList;
