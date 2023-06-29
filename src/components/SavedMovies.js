import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import BoxMore from './BoxMore/BoxMore';
import MenuBurger from './MenuBurger/MenuBurger';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { useHistory } from 'react-router-dom';

function SavedMovies(props) {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const history = useHistory();

    useEffect(() => {
        props.init();
        setFilteredMovies(props.movies);
        localStorage.removeItem('textSaveSearch');
    }, [history]);

    return (
        <main>
            <MenuBurger
                handlerClickClose={props.handlerClickClose}
                isMenuOpen={props.isMenuOpen}
            />
            <Header
                onButtonClick={props.handlerClickClose}
                loggedIn={props.loggedIn}
            />
            <SearchForm
                onSearch={props.onSearch}
                handlerToggleCheckbox={props.onToogleCheckbox}
            />
            <section className='elements'>
                <MoviesCardList
                    isMySave={true}
                    count={props.savedMovies.length}
                    movies={props.savedMovies}
                    savedMovies={filteredMovies}
                    onCardDelete={props.onCardDelete}
                    handleLikeClick={props.handleLikeClick}
                />
            </section>
            <BoxMore
                isMySave={true}
                onClick={null}
                isVisible={false}
            />
            <Footer/>
        </main>
    );
}

export default SavedMovies;