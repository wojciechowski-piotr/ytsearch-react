import { Container } from '@material-ui/core';
import styled from 'styled-components';

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
            margin: 0.25rem 0 1rem;
        }
        &__desc {
            display: block;
            padding-top: 1rem; 
            white-space: pre-line;
            word-break: break-word;
        }
        .channel {
            display: flex;
            align-items: center;
            background-color: transparent;
            margin: 1rem 0;
            &__media {
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
            &__content {
                &:last-child{
                    padding-bottom: 16px;
                }
            }
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
