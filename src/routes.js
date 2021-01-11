import React from 'react';
import {BrowserRouter,  Switch, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';

const Routes = () => {
    return(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Sobre" component={Sobre} />
        </Switch>
        <Footer />
    </BrowserRouter>
    );
}
export default Routes;