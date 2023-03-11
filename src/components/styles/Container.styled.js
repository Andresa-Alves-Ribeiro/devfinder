import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 48rem) {
        padding-left: 1.5rem;
    }

    @media only screen and (min-width: 48rem) {
        padding-top: 3vh;
    }

    @media only screen and (min-width: 100rem) {
        padding-top: 15vh;
        padding-bottom: 5vh;
    }
`