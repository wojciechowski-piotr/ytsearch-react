import React from 'react';
import { IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { Wrapper } from './SearchBar.styles';

interface Props {
    term: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit: React.FormEventHandler<HTMLButtonElement>;
}

const SearchBar = ({ term, handleChange, handleSubmit }: Props) => {
    return (
        <Wrapper maxWidth="md">
            <InputBase className="input-bar" placeholder="Search Youtube videos by your keywords" value={term} onChange={handleChange} />
            <IconButton type="submit" aria-label="search" onClick={handleSubmit}>
                <SearchIcon />
            </IconButton>
        </Wrapper>
    );
};

export default SearchBar;
