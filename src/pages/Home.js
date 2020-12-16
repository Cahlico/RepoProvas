import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory();

    return(
        <HomeContainer>
            <Container>
                <Button onClick={() => history.push('/exam-list')}>Ver lista de provas</Button>
            </Container>
            <Container>
                <Button onClick={() => history.push('/add-exam')}>Adicionar prova</Button>
            </Container>
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    display: flex;
    margin: 120px 0 0 20%;
`

const Container = styled.nav`
    width: 25vw;
    background-color: #4185a3;
    border-radius: 25px;
    text-align: center;
    flex-shrink: 0;
    margin-right: 10%;
    padding: 10px;
`;

const Button = styled.button`
    border: none;
    outline-style: none;
    width: 90%;
    padding: 15vh 10px 16vh 0;
    margin: 4% 2%;
    border-radius: 10px;
    background-color: #54a4c7;
    color: #FFF;
    font-size: 24px;
    font-weight: 900;
`