import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Container, Mask } from '../styles/styledSendExam';

export default function ExamList() {
    const [subjects, setSubjects] = useState([]);
    const [professors, setProfessors] = useState([]);
    const [chosenProfessor, setChosenProfessor] = useState('');
    const [link, setLink] = useState('');
    const [examType, setExamType] = useState('');
    const [subjectId, setSubjectId] = useState(null);
    const [clicked, setClicked] = useState(false);
    
    const history = useHistory();

    useEffect(() => {
        const request = axios.get('http://localhost:3000/api/v1/subjects');
        request.then(resp => {
            setSubjects(resp.data);
        });
        request.catch(() => {
            alert('houve um erro no carregamento da página, tente novamente');
        });
    }, []);

    function findProfessor(subject) {
        setSubjectId(subject.id);

        const request = axios.post('http://localhost:3000/api/v1/subjects/professor', { name: subject.name });
        request.then(resp => { 
            setProfessors(resp.data);
        });
        request.catch(() => {
            alert('houve um erro no carregamento da lista de professores, tente novamente')
        });
    }

    function sendExam() {
        if(link === '' || examType.length !== 2) return alert('Por favor, preencha todos os dados');
        if(clicked) return;
        
        setClicked(true);

        const body = { link, examType, subjectId };

        const request = axios.post('http://localhost:3000/api/v1/exams', body);
        request.then(() => {
            alert('prova adicionada com sucesso');
            history.push('/');
        });
        request.catch(() => {
            alert('deu ruim, tente novamente');
            setClicked(false);
        })
    }

    return (
        <Container>
            <div>
                <h2>Selecione uma matéria:</h2>
                {subjects.length !== 0
                    ? <>
                        {subjects.map(i => (
                            <button 
                                key={i.id}
                                onClick={() => findProfessor(i)}
                            >{i.name}</button>
                        ))}
                        <button onClick={() => history.push('/add-subject')}>+ Adicionar matéria</button>
                    </>
                    : <p>Carregando matérias disponíveis...</p>
                }
                
            </div>
            <div>
                <h2>Selecione o professor da matéria:</h2>
                {professors.length !== 0
                    ? <>
                        {professors.map(i => (
                            <button
                                key={i.id + i.subjectId}
                                onClick={() => setChosenProfessor(i.name)}
                            >{i.name}</button>
                        ))}
                        <button onClick={() => history.push('/add-professor')}>+ Adicionar professor</button>
                    </>
                    : <p>Selecione uma matéria para encontrar os professores</p>
                }
            </div>
            {chosenProfessor
                ? <div>
                    <h2>Preencha os dados seguintes:</h2>
                    <input
                        type='url'
                        placeholder='link para a prova'
                        value={link}
                        onChange={e => setLink(e.target.value)}
                    />
                    <Mask mask="P*" type='text' onChange={e => setExamType(e.target.value)}
                        placeholder='prova' value={examType.toUpperCase()}
                    />
                    <button onClick={sendExam}>Enviar</button>
                </div>
                : ''
            }
        </Container>
    );
}