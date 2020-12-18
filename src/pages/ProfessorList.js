import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Container, Label } from '../styles/styledLists';

export default function ProfessorsList() {
    const [professors, setProfessors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const request = axios.get('https://repo-provas-calico-api.herokuapp.com/api/v1/professors');
        request.then(resp => {
            console.log(resp.data);
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
                        <h1>Professores:</h1>
                        <Label>Provas:</Label>
                    </div>
                    {professors.map(e => (
                        <div key={e.name}>
                            <button
                                onClick={() => history.push({ pathname:`/exam-list`, state: e.subjectId })}
                            >{e.name}</button>
                            <strong>{e.count.count}</strong>
                        </div>
                    ))}
                </>
                : <p>Carregando professores disponíveis...</p>
            }
        </Container>
    );
}