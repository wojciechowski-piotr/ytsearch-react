import { Container } from '@material-ui/core';
import styled from 'styled-components';

import theme from '../../theme';

export const Wrapper = styled(Container)`
    display: flex;
    background-color: ${theme.palette.primary.main};
    width: 100%;
    padding: 0;

    .input-bar {
        width: 100%;
        input {
            padding: 0.5rem 1rem;
        }
    }
`;
