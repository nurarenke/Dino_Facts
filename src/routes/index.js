import React from 'react';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import Home from './home';
import NotFound from './notfound';

export default() => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" exact component={Home} />
            <Route exact path="/fact/:id" component={Home}/>
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);