import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Header from './Header';
import ExamList from '../pages/ExamList';

export default function App() {
    return(
        <Router>
            <Header />
            <Switch>
                <Route path='exam-list' component={ExamList} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
}