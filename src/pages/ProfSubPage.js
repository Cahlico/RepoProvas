import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function ProfSubPage() {
    const history = useHistory();

    return(
        <ProfSubContainer>
            <Container>
                <Button onClick={() => history.push('/subject-list')}>Agrupar por matérias</Button>
            </Container>
            <Container>
                <Button onClick={() => history.push('/professor-list')}>Agrupar por professor</Button>
            </Container>
        </ProfSubContainer>
    );
}

const ProfSubContainer = styled.div`
    display: flex;
    margin: 120px 0 0 20%;
`;

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
`;