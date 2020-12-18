import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Container } from '../styles/styledAddition';

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
        const request = axios.post('https://repo-provas-calico-api.herokuapp.com/api/v1/subjects', body);
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