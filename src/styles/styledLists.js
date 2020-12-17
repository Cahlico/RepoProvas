import styled from 'styled-components';

export const Container = styled.div`
    div {
        margin: 20px;
        display: flex;
        justify-content: space-between;
    }

    button {
        border: none;
        outline-style: none;
        padding: 5px;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 700;
        box-shadow: 1px 1px 2px rgba(255, 255, 255, .7);
        background-color: #54a4c7;
        color: #FFF;
    }

    strong {
        margin-right: 600px;
        font-size: 22px;
    }
`;

export const Label = styled.h1`
    font-size: 24px;
    font-weight: 900;
    margin-right: 600px;
`;