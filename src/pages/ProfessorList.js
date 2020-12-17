import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Container, Label } from '../styles/styledLists';

export default function ProfessorsList() {
    const [professors, setProfessors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const request = axios.get('http://localhost:3000/api/v1/professors');
        request.then(resp => {
            setProfessors(resp.data);
        });
        request.catch(() => {
            alert('houve um erro no carregamento da página, tente novamente');
        });
    }, []);

    return(
        <Container>
            {professors.length !== 0
                ? <>
                    <div>
                        <Label>Professores:</Label>
                    </div>
                    {professors.map(i => (
                        <div>
                            <button 
                                key={i.id}
                                onClick={() => history.push({ pathname:`/exam-list`, state: i.subjectId })}
                            >{i.name}</button>
                        </div>
                    ))}
                </>
                : <p>Carregando professores disponíveis...</p>
            }
        </Container>
    );
}