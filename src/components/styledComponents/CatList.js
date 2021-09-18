import styled, { css } from 'styled-components';

const CatList = styled.div`
    flex-grow: 8;
    margin: 0 20px;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) )
`;

export default CatList;