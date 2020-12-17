import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Container = styled.div`
    margin: 30px 10%;

    h2 {
        font-size: 24px;
        font-weight: 900;
        margin: 2%;
    }

    p {
        margin: 2%;
    }

    button, input {
        border: none;
        outline-style: none;
        padding: 5px;
        margin: .5% 2%;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 700;
        box-shadow: 1px 1px 2px rgba(255, 255, 255, .7)
    }

    button {
        background-color: #54a4c7;
        color: #FFF;
    }   
`;

export const Mask = styled(InputMask)`
    width: 40px;
`;