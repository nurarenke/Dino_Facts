import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/home/:id" exact render={props => <Home {...props} />}/>
        </Switch>
    </BrowserRouter>
);