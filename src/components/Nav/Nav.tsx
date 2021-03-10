import { Toolbar, Typography } from '@material-ui/core'

import { StyledAppBar } from './Nav.styles'
import SearchBar from '../SearchBar'

const Nav = () => {
    return (
        <>
         <StyledAppBar position='static' elevation={0}>
             <Toolbar>
                 <Typography variant='h6' component='span'>
                     YTsearch
                 </Typography>
                 <SearchBar />
             </Toolbar>
         </StyledAppBar>
        </>
    )
}

export default Nav
