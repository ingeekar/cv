import React from 'react';
import styled from 'styled-components';


const MainStyled = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 1280px);
    justify-content: center;
    padding: 1rem; 
`

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
    grid-row-gap: 0.5rem;

    @media (max-width: 767px){
        grid-template-columns: 1fr;
    }
`

const Main = ({ children }) => (

    <MainStyled>
        <MainContainer>
            {children}
        </MainContainer>
    </MainStyled>

)

export default Main