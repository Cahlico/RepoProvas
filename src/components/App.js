import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Header from './Header';
import ExamList from '../pages/ExamList';
import SendExam from '../pages/SendExam';

export default function App() {
    return(
        <Router>
            <Header />
            <Switch>
                <Route path='/add-exam' component={SendExam} />
                <Route path='/exam-list' component={ExamList} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
}