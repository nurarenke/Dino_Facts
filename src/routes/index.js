import React from 'react';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import Home from './home';

export default() => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/fact/:id" component={Home}/>
        </Switch>
    </BrowserRouter>
);