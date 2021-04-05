import { Toolbar, Typography } from '@material-ui/core';

import { StyledAppBar } from './Nav.styles';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledAppBar position="static" elevation={0}>
            <Toolbar>
                <Typography variant="h6" component="span">
                    <Link to="/">YTsearch</Link>
                </Typography>
                <SearchBar />
            </Toolbar>
        </StyledAppBar>
    );
};

export default Nav;
