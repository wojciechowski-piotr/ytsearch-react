import React from 'react';
import { IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { Wrapper } from './SearchBar.styles';

interface Props {}

const SearchBar = (props: Props) => {
    return (
        <Wrapper maxWidth='md'>
            <InputBase className='input-bar' placeholder="Search Youtube videos by your keywords" />
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </Wrapper>
    );
};

export default SearchBar;
