import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
    BrowserRouter as Router,
    Route, Redirect, Switch,
} from 'react-router-dom';
import { theme } from './theme';
import Container from './views/container/Container';
import Home from './views/home';
import Page from './views/page/Page';

export default () => (
    <ThemeProvider theme={theme}>
        <Router>
            <Container>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/page" component={Page} />
                    <Redirect to="/page" />
                </Switch>
            </Container>
        </Router>
    </ThemeProvider>
);
