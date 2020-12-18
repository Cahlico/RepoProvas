import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import { Container } from '../styles/styledAddition';

export default function AddProfessor() {
    const [professorName, setProfessorName] = useState('');
    const [clicked, setClicked] = useState(false);

    const history = useHistory();
    const { state } = useLocation()

    function addNewSubject(event) {
        event.preventDefault();

        if(professorName === '') return alert('Preencha todos os campos');

        setClicked(true);
        
        const body = { name: state, professorName }
        const request = axios.post('http://localhost:3000/api/v1/subject/new-professor', body);
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
                value={state}
            />
            <input
                type='text'
                placeholder='nome do professor'
                value={professorName}
                onChange={e => setProfessorName(e.target.value)}
            />
            {clicked
                ? <button>Enviando matéria...</button>
                : <button type='submit'>Enviar nova matéria</button>
            }
        </Container>
    );
}