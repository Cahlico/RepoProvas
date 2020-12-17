import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Label } from '../styles/styledSubjectList';

export default function SubjectList() {
    const [subjects, setSubjects] = useState([]);

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
                        <div>
                            <button 
                                key={i.id}
                                onClick={() => findProfessor(i)}
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