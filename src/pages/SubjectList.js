import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Container, Label } from '../styles/styledLists';

export default function SubjectList() {
    const [subjects, setSubjects] = useState([]);
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

    return(
        <Container>
            {subjects.length !== 0
                ? <>
                    <div>
                        <Label>Matérias</Label>
                        <Label>Período</Label>
                    </div>
                    {subjects.map(i => (
                        <div key={i.id}>
                            <button 
                                onClick={() => history.push({ pathname:`/exam-list`, state: i.name })}
                            >{i.name}</button>
                            <strong>{i.period}</strong>
                        </div>
                    ))}
                </>
                : <p>Carregando matérias disponíveis...</p>
            }
        </Container>
    );
}