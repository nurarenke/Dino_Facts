import React from 'react';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import Home from './home';

export default() => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/fact/:id" exact render={props => <Home {...props} />}/>
        </Switch>
    </BrowserRouter>
);