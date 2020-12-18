import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function AddSubject() {
    const [subject, setSubject] = useState('');
    const [professorName, setProfessorName] = useState('');
    const [period, setPeriod] = useState('');
    const history = useHistory();
    const [clicked, setClicked] = useState(false);

    function addNewSubject(event) {
        event.preventDefault();

        if(subject === '' || professorName === '' || period === '') return alert('Preencha todos os campos');
        else if(!parseInt(period)) return alert('Período deve ser um número');

        setClicked(true);
        
        const body = { name: subject, professorName, period: parseInt(period)}
        const request = axios.post('http://localhost:3000/api/v1/subjects', body);
        request.then(() =>  history.goBack());
        
        request.catch(() => {
            alert('falha ao enviar o pedido, verifique os dados inseridos');
            setClicked(false);
        });
    }

    return(
        <Container onSubmit={addNewSubject}>
            <input 
                type='text' 
                placeholder='nome da matéria'
                value={subject}
                onChange={e => setSubject(e.target.value)}
            />
            <input
                type='text'
                placeholder='nome do professor'
                value={professorName}
                onChange={e => setProfessorName(e.target.value)}
            />
            <input
                type='text'
                placeholder='período'
                value={period}
                onChange={e => setPeriod(e.target.value)}
            />
            {clicked
                ? <button>Enviando matéria...</button>
                : <button type='submit'>Enviar nova matéria</button>
            }
        </Container>
    );
}

const Container = styled.form`
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