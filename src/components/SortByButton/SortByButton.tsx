import React, { useContext } from 'react';
import { InputLabel, MenuItem, Select } from '@material-ui/core';

import { StyledFormControl } from './SortByButton.styles';
import { DataContext } from '../../contexts/DataContext';


const SortByButton = () => {
    const { serachOrder, setSearchOrder } = useContext(DataContext);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSearchOrder(event.target.value as string);
    };

    return (
        <StyledFormControl>
            <InputLabel>Sort by</InputLabel>
            <Select value={serachOrder} onChange={handleChange}>
                <MenuItem value="date">date</MenuItem>
                <MenuItem value="viewCount">views</MenuItem>
                <MenuItem value="relevance">relevance</MenuItem>
            </Select>
        </StyledFormControl>
    );
};

export default SortByButton;
