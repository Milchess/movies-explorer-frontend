import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import BoxMore from './BoxMore/BoxMore';
import MenuBurger from './MenuBurger/MenuBurger';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import useWindowSize from '../utils/useWindowSize';

function SavedMovies(props) {
    const [visibleMovies, setVisibleMovies] = useState(0);

    const { width } = useWindowSize();

    useEffect(() => {
        if (width >= 1280) {
            setVisibleMovies(visibleMovies + 12)
        } else if (width >= 768) {
            setVisibleMovies(visibleMovies + 8)
        } else {
            setVisibleMovies(visibleMovies + 5)
        }
    },[]);

    const handleLoadMore = () => {
        setVisibleMovies(visibleMovies + (width >= 1280 ? 3 : 2))
    }

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
                    count={visibleMovies}
                    movies={props.savedMovies}
                    savedMovies={props.savedMovies}
                    onCardDelete={props.onCardDelete}
                    handleLikeClick={props.handleLikeClick}
                />
            </section>
            <BoxMore
                isMySave={true}
                onClick={handleLoadMore}
                isVisible={props.movies.length > visibleMovies}
            />
            <Footer/>
        </main>
    );
}

export default SavedMovies;