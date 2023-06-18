import HeaderMain from './HeaderMain';
import Footer from './Footer';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ErrorPage from './Error';
import Main from './Main';
import Header from './Header';
import Card from './Card';
import Profile from './Profile';

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
                    <HeaderMain />
                    <Main></Main>
                    <Footer />
                </Route>

                <Route path='/films'>
                    <Header />
                    <Card
                        isSavedFilms={true}
                    />
                    <Footer />
                </Route>

                <Route path='/profile'>
                    <Header />
                    <Profile />
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