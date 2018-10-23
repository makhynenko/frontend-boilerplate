import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch, Redirect,
} from 'react-router-dom';

import Home from './views/home/Home';
import List from './views/list/List';

export default () => (
    <Router>
        <Switch>
            <Route path="/list" component={List} />
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
        </Switch>
    </Router>
);
