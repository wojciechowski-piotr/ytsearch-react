import React from 'react';
import { SearchResponseType, VideosResponseType } from '../../types';
import ResultsItem from '../ResultsItem';
import { Wrapper } from './ResultsList.styles';

interface Props {
    fetchedData: any[];
}

const ResultsList = ({ fetchedData }: Props) => {
    return (
        <Wrapper>
            {fetchedData.map((item: VideosResponseType) => (
                <ResultsItem key={item.id} item={item} />
            ))}
        </Wrapper>
    );
};

export default ResultsList;
