import styled from 'styled-components';

export const Wrapper = styled.div`
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
`