import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';
import Login from '../Login';
import Register from '../Register';
import ErrorPage from '../Error/Error';
import Main from '../Main/Main';
import Movies from '../Movies';
import Profile from '../Profile';
import SavedMovies from '../SavedMovies';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../../ProtectedRoute';
import Header from '../Header/Header';

export default function App() {
    const [isMenuOpen, toggleMenu] = useState(false);
    const [isEditProfile, toggleEditProfile] = useState(true);
    const [currentUser, setCurrentUser] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
    const [tooltipStatus, setTooltipStatus] = useState('success');

    const history = useHistory();

    useEffect(validAuth, []);
    useEffect(() => {
        //TODO исправить ошибку после регистрации
        if (loggedIn)
            Promise.all([mainApi.getUserInformation()])
                .then(([user]) => {
                    setCurrentUser(user);
                })
                .catch(err => {
                    console.log(`Ошибка.....: ${err}`)
                });
    }, [loggedIn]);

    function validAuth() {
        if (localStorage.getItem('token')) {
            mainApi.getValidationToken()
                .then(() => {
                    setLoggedIn(true);
                    history.push('/');
                })
                .catch(err => {
                    console.log(`Ошибка.....: ${err}`);
                });
        }
    }

    function handleSignIn(model) {
        mainApi.getAuthorization(model)
            .then((data) => {
                setLoggedIn(true);
                localStorage.setItem('token', data.token);
                history.push('/movies');
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
                const modelSignIn = {
                    email: model.email,
                    password: model.password
                };
                setTooltipStatus('success');
                handleSignIn(modelSignIn)
            })
            .catch(err => {
                setTooltipStatus('fail');
                console.log(`Ошибка.....: ${err}`)
            }).finally(handleInfoTooltip);
    }

    function handleSearch(model) {
        console.log(model);
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
                        <Header
                            loggedIn={loggedIn}
                            onButtonClick={toggleEditProfileMode}
                            isMain={true}
                        />
                        <Main/>
                        <Footer
                            isMain={true}
                        />
                    </Route>

                    <ProtectedRoute
                        path='/movies'
                        component={Movies}
                        onSearch={handleSearch}
                        handlerClickClose={toggleMenuMode}
                        isMenuOpen={isMenuOpen}
                        loggedIn={loggedIn}
                    />

                    <ProtectedRoute
                        path='/saved-movies'
                        component={SavedMovies}
                        onSearch={handleSearch}
                        handlerClickClose={toggleMenuMode}
                        isMenuOpen={isMenuOpen}
                        loggedIn={loggedIn}
                    />

                    <ProtectedRoute
                        path='/profile'
                        component={Profile}
                        onSearch={handleSearch}
                        handlerClickClose={toggleMenuMode}
                        isMenuOpen={isMenuOpen}
                        loggedIn={loggedIn}
                        onButtonClick={toggleEditProfileMode}
                        isEditProfile={isEditProfile}
                    />

                    <Route>
                        <ErrorPage/>
                    </Route>
                </Switch>
            </div>
        </CurrentUserContext.Provider>
    );
}