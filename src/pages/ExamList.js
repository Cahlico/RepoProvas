import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { Container, Title } from '../styles/styledExamList';

export default function ExamList() {
    const { state } = useLocation();
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let request;

        if(typeof state === 'number') {
            request = axios.get(`https://repo-provas-calico-api.herokuapp.com/api/v1/exams/professor:${state}`);
        } else {
            request = axios.get(`https://repo-provas-calico-api.herokuapp.com/api/v1/exams/subject:${state}`);
        }

        request.then(resp => {
            setExams(resp.data);
            setLoading(false);
        });
        request.catch(() => alert('ocorreu um erro no carregamento da página'));
    }, []);

    return (
        <Container>
            {!loading
                ? exams.length !== 0
                    ? <>
                        <Title>{exams[0].name}</Title>
                        {exams.map(e => (
                            <div key={e.link}>
                                <a href={e.link} target="_blank">Link para a prova</a>
                                <p>{e.examType}</p>
                            </div>
                        ))}
                    </>
                    : <strong>A matéria ou professor ainda não contem nenhuma prova postada</strong>
                : <strong>Carregando conteudo...</strong>
            }  
        </Container>
    );
}