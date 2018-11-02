import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import {
    BrowserRouter as Router,
    Route, Redirect, Switch,
} from 'react-router-dom';
import { theme } from 'config/theme';
import 'config/axios';
import configureStore from 'config/store';
import Container from './views/container/Container';
import Home from './views/home';
import Page from './views/list/List';

export const store = configureStore();

export default () => (
    <Provider store={store}>
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
    </Provider>
);
