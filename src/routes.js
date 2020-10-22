import React from 'react';
import {BrowserRouter,  Switch, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Home from './Pages/Home';

const Routes = () => {
    return(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
    );
}
export default Routes;