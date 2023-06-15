import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ErrorPage from './Error';
import Main from './Main';

export default function App() {
    return (
        <div className="page">
            <Switch>
                <Route path='/signin'>
                    <Login />
                </Route>

                <Route path='/signup'>
                    <Register />
                </Route>

                <Route exact path='/'>
                    <Header />
                    <Main></Main>
                    <Footer />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>

                <Route  path=''>
                    <Redirect to='/' />
                </Route>
            </Switch>

        </div>
    )
}