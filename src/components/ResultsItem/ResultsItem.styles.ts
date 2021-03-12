import { Card, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const SCCard = styled(Card)`
    margin-bottom: 1.5rem;
    display: flex;
    flex-flow: column nowrap;
    .card-grid {
        img {
            height: 150px;
            object-fit: cover;
        }
    }
    .MuiCardContent-root {
        padding: 10px;
    }
    ${(props) => props.theme.breakpoints.up('sm')} {
        margin-bottom: 1rem;
        .card-grid {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            height: 150px;
            img {
                width: 200px;
                object-fit: cover;
            }
        }
        .MuiCardContent-root {
            padding: 1rem;
        }
    }
`;

export const SCTypography = styled(Typography)`
    &.MuiTypography-h6 > h2 {
        margin-top: 5px;
        font-size: 1rem;
    }
    .secondary-label {
        font-size: 0.9rem;
    }
    ${(props) => props.theme.breakpoints.up('sm')} {
        &.MuiTypography-h6 > h2 {
        font-size: inherit;
    }
    }
`;
