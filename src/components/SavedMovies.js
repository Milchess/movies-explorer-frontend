import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import BoxMore from './BoxMore/BoxMore';
import MenuBurger from './MenuBurger/MenuBurger';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function SavedMovies(props) {
    const [filteredMovies, setFilteredMovies] = useState(props.savedMovies);

    useEffect(() => {
        setFilteredMovies(props.movies);
    }, [props.movies]);

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