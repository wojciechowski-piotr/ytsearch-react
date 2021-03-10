import styled from 'styled-components';
import { Container } from '@material-ui/core';

export const Wrapper = styled(Container)`
    display: flex;
    flex-flow: column nowrap;
    margin-top: 6rem;
    .topbar {
        margin-bottom: 1rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }
    .more-btn {
        margin: 1rem 0 2rem;
    }
`;
