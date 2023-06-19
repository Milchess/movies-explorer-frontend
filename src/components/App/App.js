import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HeaderMain from '../HeaderMain/HeaderMain';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login';
import Register from '../Register';
import ErrorPage from '../Error/Error';
import Main from '../Main/Main';
import Movies from '../Movies';
import Profile from '../Profile';
import SavedMovies from '../SavedMovies';

export default function App() {
    return (
        <div className='page'>
            <Switch>
                <Route path='/signin'>
                    <Login/>
                </Route>

                <Route path='/signup'>
                    <Register/>
                </Route>

                <Route exact path='/'>
                    <HeaderMain/>
                    <Main/>
                    <Footer/>
                </Route>

                <Route path='/movies'>
                    <Header/>
                    <Movies/>
                    <Footer/>
                </Route>

                <Route path='/saved-movies'>
                    <Header/>
                    <SavedMovies/>
                    <Footer/>
                </Route>

                <Route path='/profile'>
                    <Header/>
                    <Profile/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

                <Route path=''>
                    <Redirect to='/'/>
                </Route>
            </Switch>

        </div>
    );
}