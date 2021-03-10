import styled from 'styled-components';
import { Container } from '@material-ui/core';

export const Wrapper = styled(Container)`
    display: flex;
    flex-flow: column nowrap;
    margin-top: 4rem;
    .results-label {
        margin-bottom: 1rem;
    }
    .more-btn {
        margin: 1rem 0 2rem;
    }
`;
