import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';
import Login from '../Login';
import Register from '../Register';
import ErrorPage from '../Error/Error';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile';
import SavedMovies from '../SavedMovies';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../../ProtectedRoute';
import Header from '../Header/Header';
import Tooltip from '../Tooltip/Tooltip';
import MenuBurger from '../MenuBurger/MenuBurger';
import moviesApi from '../../utils/MoviesApi';
import { filterDuration, filterMovies } from '../../utils/utils';
import Preloader from '../Preloader/Preloader';


export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isMenuOpen, toggleMenu] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
    const [tooltipText, setTooltipText] = useState('');
    const [savedMovies, setSavedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [initialMovies, setInitialMovies] = useState([]);

    const history = useHistory();

    useEffect(() => {
        Promise.all([mainApi.getUserInformation(), mainApi.getInitialMovies()])
            .then(([user, cards]) => {
                setLoggedIn(true);
                setCurrentUser(user);
                setSavedMovies(cards.reverse());
            })
            .catch(err => {
                setLoggedIn(false);
                console.log(err);
            });
    }, [loggedIn, history]);

    function handleSignIn(model) {
        mainApi.getAuthorization(model)
            .then(({ token }) => {
                setLoggedIn(true);
                localStorage.setItem('token', token);
                history.push('/movies');
                history.go('/');
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

                handleSignIn(modelSignIn);
            })
            .catch(err => {
                setTooltipText(err);
            })
            .finally(handleInfoTooltip);
    }

    function handleSignOut() {
        localStorage.removeItem('token');
        setLoggedIn(false);
        history.go('/');
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

    function closeAllPopups() {
        setIsInfoTooltipOpen(false);
    }

    function handleSearch({ search, switchBox = false }) {
        setIsLoading(true);
        moviesApi.getMovies()
            .then((data) => {
                const moviesList = filterMovies(data, search);
                let isEmptyList = moviesList.length === 0;

                if (switchBox) {
                    const filterDurationList = filterDuration(moviesList);
                    isEmptyList = filterDurationList.length === 0;
                    setInitialMovies(filterDurationList);
                } else {
                    setInitialMovies(moviesList);
                }

                if (isEmptyList) {
                    setTooltipText('Ничего не найдено');
                    handleInfoTooltip();
                }
            })
            .catch(err => {
                console.log(err);
                const text = '«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»';
                setTooltipText(text);
                handleInfoTooltip();
            })
            .finally(() => setIsLoading(false));
    }

    function handleCardLike(card) {
        mainApi.setCreateMovie(card)
            .then((newMovie) => {
                setSavedMovies([newMovie, ...savedMovies]);
            })
            .catch(err => {
                setTooltipText(err);
            })
            .finally(handleInfoTooltip);
    }

    function handleCardDelete(card) {
        mainApi.setDeleteMovie(card._id)
            .then(() => {
                setSavedMovies((state) => state.filter((item) => item._id !== card._id));
            })
            .catch(err => {
                setTooltipText(err);
            })
            .finally(handleInfoTooltip);
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
                        <MenuBurger
                            handlerClickClose={toggleMenuMode}
                            isMenuOpen={isMenuOpen}
                        />
                        <Header
                            loggedIn={loggedIn}
                            onButtonClick={toggleMenuMode}
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
                        savedMovies={savedMovies}
                        onCardDelete={handleCardDelete}
                        handleLikeClick={handleCardLike}
                        movies={initialMovies}
                    />

                    <ProtectedRoute
                        path='/saved-movies'
                        component={SavedMovies}
                        onSearch={handleSearch}
                        handlerClickClose={toggleMenuMode}
                        isMenuOpen={isMenuOpen}
                        loggedIn={loggedIn}
                        savedMovies={savedMovies}
                        onCardDelete={handleCardDelete}
                        handleLikeClick={handleCardLike}
                        movies={initialMovies}
                    />

                    <ProtectedRoute
                        path='/profile'
                        component={Profile}
                        onSubmit={handleUpdateProfile}
                        onSearch={handleSearch}
                        handlerClickClose={toggleMenuMode}
                        isMenuOpen={isMenuOpen}
                        loggedIn={loggedIn}
                        init={true}
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
            {isLoading && <Preloader />}
        </CurrentUserContext.Provider>
    );
}