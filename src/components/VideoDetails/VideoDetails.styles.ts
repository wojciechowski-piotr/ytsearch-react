import { Container } from '@material-ui/core';
import styled from 'styled-components';

import theme from '../../theme';

export const Wrapper = styled(Container)`
    margin-top: 6rem;
    padding-bottom: 3rem;
    .player {
        display: flex;
        flex-flow: column;
        align-items: center;
        iframe {
            width: 100%;
            min-height: 215px;
            margin-bottom: 2rem;
        }
    }
    .infos {
        h2 {
            margin: 0.25rem 0 1.5rem;
        }
        &__desc {
            white-space: pre-line;
            word-break: break-word;
        }
    }
    ${(props) => props.theme.breakpoints.up('sm')} {
        .player {
            iframe {
                width: 100%;
                min-height: 695px;
            }
        }
    }
`;
