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
import Tooltip from '../Tooltip/Tooltip';

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isMenuOpen, toggleMenu] = useState(false);
    const [isEditProfile, toggleEditProfile] = useState(true);
    const [currentUser, setCurrentUser] = useState('');
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
    const [tooltipText, setTooltipText] = useState('');

    const history = useHistory();

    useEffect(validAuth, [history]);
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
                })
                .catch(err => {
                    console.log(`Ошибка.....: ${err}`);
                    history.push('/');
                });
        }
    }

    function handleSignIn(model) {
        mainApi.getAuthorization(model)
            .then(({ token }) => {
                setLoggedIn(true);
                localStorage.setItem('token', token);
                history.push('/movies');
            })
            .catch(err => {
                setTooltipText(err);
                handleInfoTooltip();
            });
    }

    function handleUpdateProfile(model) {
        mainApi.setUserUpdate(model)
            .then((data) => {
                setCurrentUser(data);
                setTooltipText('Данные успешно изменены');
            })
            .catch(err => {
                setTooltipText(err);
            }).finally(handleInfoTooltip)
    }

    function handleSignUp(model) {
        mainApi.setRegistration(model)
            .then(() => {
                const modelSignIn = {
                    email: model.email,
                    password: model.password
                };
                setTooltipText('Вы успешно зарегистрировались!');
                handleSignIn(modelSignIn);
            })
            .catch(err => {
                setTooltipText(err);
            }).finally(handleInfoTooltip);
    }

    function handleSearch(model) {
        console.log(model);
    }

    function handleSignOut() {
        localStorage.removeItem('token');
        setLoggedIn(false);
        history.push('/');
    }

    function handleInfoTooltip() {
        setIsInfoTooltipOpen(true);
    }

    function handleTextTooltip(text) {
        setTooltipText(text);
    }

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    function toggleEditProfileMode() {
        toggleEditProfile(!isEditProfile);
    }

    function closeAllPopups() {
        setIsInfoTooltipOpen(false);
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
                        onSubmit={handleUpdateProfile}
                        onSearch={handleSearch}
                        handlerClickClose={toggleMenuMode}
                        isMenuOpen={isMenuOpen}
                        loggedIn={loggedIn}
                        onButtonClick={toggleEditProfileMode}
                        isEditProfile={isEditProfile}
                        signOut={handleSignOut}
                        onToolTip={handleInfoTooltip}
                        toolTipText={handleTextTooltip}
                    />

                    <Route>
                        <ErrorPage/>
                    </Route>
                </Switch>
                <Tooltip
                    isOpen={isInfoTooltipOpen}
                    onClose={closeAllPopups}
                    text={tooltipText}
                />
            </div>
        </CurrentUserContext.Provider>
    );
}