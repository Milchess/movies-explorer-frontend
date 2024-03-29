import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
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
    const [searchSavedMovies, setSearchSavedMovies] = useState(savedMovies);
    const [isLoading, setIsLoading] = useState(false);
    const [isShort, setIsShort] = useState(false);
    const [initialMovies, setInitialMovies] = useState([]);

    const history = useHistory();
    const location = useLocation();
    const path = location.pathname;

    useEffect(validAuth, []);

    useEffect(() => {
        if (loggedIn)
        Promise.all([mainApi.getUserInformation(), mainApi.getInitialMovies()])
            .then(([user, cards]) => {
                setLoggedIn(true);
                setCurrentUser(user);
                setSavedMovies(cards.reverse());
                setSearchSavedMovies(cards.reverse());
            })
            .catch(err => {
                console.log(err);
            });
    }, [loggedIn, history]);

    function validAuth() {
        if (localStorage.getItem('token')) {
            mainApi.getValidationToken()
                .then(() => {
                    setLoggedIn(true);
                    history.push(path);
                })
                .catch(err => {
                    console.log(`Ошибка.....: ${err}`)
                });
        }
    }

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
                handleInfoTooltip();
            });
    }

    function handleSignOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('allMovies');
        localStorage.removeItem('textSearch');
        localStorage.removeItem('checkedSwitchSearch');
        localStorage.removeItem('textSaveSearch');
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

    function handleSearch(e) {
        const form = e.target.closest('form');
        const search = form.querySelector('.input-group__search').value;
        const switchBox = form.querySelector('.switch-box__form-checkbox').checked;

        localStorage.setItem('textSearch', search);
        localStorage.setItem('checkedSwitchSearch', `${switchBox ? 'on' : 'off'}`);
        setInitialMovies([]);

        if (localStorage.getItem('allMovies')) {
            const movies = JSON.parse(localStorage.getItem('allMovies'));

            setIsShort(switchBox);

            document.querySelector('.input-group__search').defaultValue = search;
            document.querySelector('.switch-box__form-checkbox').checked = switchBox;

            const moviesList = filterMovies(movies, search);
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
        } else {
            setIsLoading(true);
            moviesApi.getMovies()
                .then((data) => {
                    const moviesList = filterMovies(data, search);
                    let isEmptyList = moviesList.length === 0;
                    localStorage.setItem('allMovies', JSON.stringify(data));

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
    }

    const handleSearchSaveMovies = (e) => {
        const form = e.target.closest('form');
        const search = form.querySelector('.input-group__search').value;
        localStorage.setItem('textSaveSearch', search);
        const switchBox = form.querySelector('.switch-box__form-checkbox').checked;

        if (savedMovies === null || savedMovies.length === 0) {
            return;
        }

        setSearchSavedMovies([]);

        setIsLoading(true);
        const moviesList = filterMovies(savedMovies, search);
        let isEmptyList = moviesList.length === 0;

        if (switchBox) {
            const filterDurationList = filterDuration(moviesList);
            isEmptyList = filterDurationList.length === 0;
            setSearchSavedMovies(filterDurationList);
        } else {
            setSearchSavedMovies(moviesList);
        }
        setIsLoading(false);

        if (isEmptyList) {
            setTooltipText('Ничего не найдено');
            handleInfoTooltip();
        }
    };

    function handlerSaveMoviesToggleCheckBox(e) {
        const form = e.target.closest('form');
        const search = localStorage.getItem('textSaveSearch') ?? '';

        const switchBox = form.querySelector('.switch-box__form-checkbox').checked;

        const moviesList = filterMovies(savedMovies, search);

        if (switchBox) {
            const filterDurationList = filterDuration(moviesList);
            setSearchSavedMovies(filterDurationList);
        } else {
            setSearchSavedMovies(moviesList);
        }
    }

    function handlerInitialSavedMovies() {
        setSearchSavedMovies(savedMovies);
    }

    function handleCardLike(card) {
        mainApi.setCreateMovie(card)
            .then((newMovie) => {
                setSavedMovies([newMovie, ...savedMovies]);
            })
            .catch(err => {
                setTooltipText(err);
                handleInfoTooltip();
            });
    }

    function handleCardDelete(id) {
        mainApi.setDeleteMovie(id)
            .then(() => {
                setSavedMovies((state) => state.filter((item) => item._id !== id));
            })
            .catch(err => {
                setTooltipText(err);
                handleInfoTooltip();
            });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <Switch>

                    <Route path='/signin'>
                        {loggedIn ? (
                            <Redirect to="/movies" />
                        ) : (
                            <Login
                                onAuth={handleSignIn}/>
                        )}
                    </Route>

                    <Route path='/signup'>
                        {loggedIn ? (
                            <Redirect to="/movies" />
                        ) : (
                            <Register
                                onRegistry={handleSignUp}/>
                        )}
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
                        isShort={isShort}
                    />

                    <ProtectedRoute
                        path='/saved-movies'
                        component={SavedMovies}
                        onSearch={handleSearchSaveMovies}
                        onToogleCheckbox={handlerSaveMoviesToggleCheckBox}
                        handlerClickClose={toggleMenuMode}
                        isMenuOpen={isMenuOpen}
                        loggedIn={loggedIn}
                        savedMovies={searchSavedMovies}
                        movies={savedMovies}
                        onCardDelete={handleCardDelete}
                        handleLikeClick={handleCardLike}
                        isShort={isShort}
                        init={handlerInitialSavedMovies}
                    />

                    <ProtectedRoute
                        path='/profile'
                        component={Profile}
                        onSubmit={handleUpdateProfile}
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