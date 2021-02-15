import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#212121'
        },
        type: 'dark',
        text: {
            primary: '#ffffff',
            secondary: '#aaaaaa'
        },
        background: {
            paper: '#212121',
            default: '#181818',
        },
    },
});

export default theme;
