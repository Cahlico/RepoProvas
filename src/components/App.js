import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Header from './Header';
import ExamList from '../pages/ExamList';
import SendExam from '../pages/SendExam';
import ProfSubPage from '../pages/ProfSubPage';
import SubjectList from '../pages/SubjectList';
import ProfessorList from '../pages/ProfessorList';
import AddSubject from '../pages/AddSubject';
import AddProfessor from '../pages/AddProfessor';

export default function App() {
    return(
        <Router>
            <Header />
            <Switch>
                <Route path='/add-professor' component={AddProfessor} />
                <Route path='/add-subject' component={AddSubject} />
                <Route path='/professor-list' component={ProfessorList} />
                <Route path='/subject-list' component={SubjectList} />
                <Route path='/prof-subject' component={ProfSubPage} />
                <Route path='/add-exam' component={SendExam} />
                <Route path='/exam-list' component={ExamList} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
}