import React, { useState } from 'react';
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
import MenuBurger from '../MenuBurger/MenuBurger';

export default function App() {
    const [isMenuOpen, toggleMenu] = useState(false);
    const [isEditProfile, toggleEditProfile] = useState(true);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    function toggleEditProfileMode() {
        toggleEditProfile(!isEditProfile);
    }

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
    );
}