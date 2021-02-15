import React from 'react'
import { Toolbar, Typography } from '@material-ui/core'

import { StyledAppBar } from './Nav.styles'

interface Props {
    
}

const Nav = (props: Props) => {
    return (
        <>
         <StyledAppBar position='static' elevation={0}>
             <Toolbar>
                 <Typography variant='h6' component='span'>
                     YTags
                 </Typography>
             </Toolbar>
         </StyledAppBar>
        </>
    )
}

export default Nav
