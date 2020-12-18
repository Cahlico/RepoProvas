import styled from 'styled-components';

export const Container = styled.form`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input, button {
        border: none;
        outline-style: none;
        padding: 5px;
        margin: 2% 0;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 700;
        box-shadow: 1px 1px 2px rgba(255, 255, 255, .7);
        display: block;
    }

    button {
        background-color: #54a4c7;
        color: #FFF;
    }

    @media(max-width: 600px) {
        input, button {
            width: 90%;
            height: 50px;
            margin: 5% 0;
        }
    }
`;