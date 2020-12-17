import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return(
        <Container>
            <Title>RepoProvas</Title>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    background-image: linear-gradient(-90deg, #54a4c7, #163d4f);
    text-align: center;
    color: #FFF;
`;

const Title = styled.h1`
    padding: 20px;
    letter-spacing: 2px;
    font-size: 34px;
    font-weight: 900;
`;