import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
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
import MenuBurger from '../MenuBurger/MenuBurger';
import mainApi from '../../utils/MainApi';

export default function App() {
    const [isMenuOpen, toggleMenu] = useState(false);
    const [isEditProfile, toggleEditProfile] = useState(true);
    const [currentUser, setCurrentUser] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState(null);
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
    const [tooltipStatus, setTooltipStatus] = useState('success');

    const history = useHistory();

    useEffect(validAuth, []);

    function validAuth() {
        if (localStorage.getItem('token')) {
            mainApi.getValidationToken()
                .then((res) => {
                    setLoggedIn(true);
                    setEmail(res.data.email);
                    history.push('/');
                })
                .catch(err => {
                    console.log(`Ошибка.....: ${err}`)
                });
        }
    }

    function handleSignIn(model) {
        mainApi.getAuthorization(model)
            .then((data) => {
                setLoggedIn(true);
                setEmail(model.email);
                localStorage.setItem('token', data.token);
                history.push('/');
            })
            .catch(err => {
                handleInfoTooltip();
                setTooltipStatus('fail');
                console.log(`Ошибка.....: ${err}`)
            })
    }

    function handleSignUp(model) {
        mainApi.setRegistration(model)
            .then(() => {
                setTooltipStatus('success');
                history.push('/signin');
            })
            .catch(err => {
                setTooltipStatus('fail');
                console.log(`Ошибка.....: ${err}`)
            }).finally(handleInfoTooltip);
    }

    function handleInfoTooltip() {
        setIsInfoTooltipOpen(true);
    }

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    function toggleEditProfileMode() {
        toggleEditProfile(!isEditProfile);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <Switch>
                    <Route path='/signin'>
                        <Login
                            onAuth={handleSignIn}/>
                    </Route>

                    <Route path='/signup'>
                        <Register
                            onRegistry={handleSignUp}/>
                    </Route>

                    <Route exact path='/'>
                        <HeaderMain/>
                        <Main/>
                        <Footer
                            isMain={true}
                        />
                    </Route>

                    <Route path='/movies'>
                        <MenuBurger
                            handlerClickClose={toggleMenuMode}
                            isMenuOpen={isMenuOpen}
                        />
                        <Header
                            onButtonClick={toggleMenuMode}
                        />
                        <Movies/>
                        <Footer/>
                    </Route>

                    <Route path='/saved-movies'>
                        <MenuBurger
                            handlerClickClose={toggleMenuMode}
                            isMenuOpen={isMenuOpen}
                        />
                        <Header
                            onButtonClick={toggleMenuMode}
                        />
                        <SavedMovies/>
                        <Footer/>
                    </Route>

                    <Route path='/profile'>
                        <MenuBurger
                            handlerClickClose={toggleMenuMode}
                            isMenuOpen={isMenuOpen}
                        />
                        <Header
                            onButtonClick={toggleMenuMode}
                        />
                        <Profile
                            onButtonClick={toggleEditProfileMode}
                            isEditProfile={isEditProfile}
                        />
                    </Route>

                    <Route>
                        <ErrorPage/>
                    </Route>

                    <Route path=''>
                        <Redirect to='/'/>
                    </Route>
                </Switch>

            </div>
        </CurrentUserContext.Provider>
    );
}