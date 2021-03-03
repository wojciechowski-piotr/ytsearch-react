import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { Wrapper } from './SearchBar.styles';
import { DataContext } from '../../contexts/DataContext';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const { dispatch } = useContext(DataContext);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        if (!inputValue) {
            event.preventDefault();
            // return alert('Input is empty!');
            return;
        } else {
            dispatch({ type: 'UPDATE', payload: inputValue });
            setInputValue('');
            event.preventDefault();
        }
    };

    return (
        <Wrapper maxWidth="md">
            <form onSubmit={handleSubmit}>
                <InputBase
                    className="input-bar"
                    placeholder="Search Youtube videos by your keywords"
                    onChange={handleChange}
                    value={inputValue}
                />
                <IconButton type="submit" aria-label="search" disabled={!inputValue}>
                    <SearchIcon />
                </IconButton>
            </form>
        </Wrapper>
    );
};

export default SearchBar;
