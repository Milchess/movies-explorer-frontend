import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import '../../index.css';
import './Movies.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuBurger from '../MenuBurger/MenuBurger';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import BoxMore from '../BoxMore/BoxMore';
import useWindowSize from '../../utils/useWindowSize';
import { filterDuration, filterMovies } from '../../utils/utils';
import {
    SHOW_MORE_DESKTOP,
    SHOW_MORE_NO_DESKTOP,
    SHOW_MOVIE_DESKTOP,
    SHOW_MOVIE_MOBILE,
    SHOW_MOVIE_TABLET, SIZE_DESKTOP, SIZE_MOBILE, SIZE_TABLET
} from '../../constant';


function Movies(props) {
    const [visibleMovies, setVisibleMovies] = useState(0);
    const [filteredMovies, setFilteredMovies] = useState(props.movies);

    const { width } = useWindowSize();

    function shownCount() {
        if (width >= SIZE_DESKTOP) {
            setVisibleMovies(SHOW_MOVIE_DESKTOP);
        } else if (width >= SIZE_TABLET) {
            setVisibleMovies(SHOW_MOVIE_TABLET);
        } else if (width >= SIZE_MOBILE) {
            setVisibleMovies(SHOW_MOVIE_MOBILE);
        }
    }

    useEffect(() => {
        shownCount();
    },[width]);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', shownCount)
        }, 500);
    });

    useEffect(() => {
        filteringMovies();
    }, [props.movies]);

    function filteringMovies() {
        if (localStorage.getItem('allMovies')) {
            const movies = JSON.parse(localStorage.getItem('allMovies'));

            const switchBoxLocal = localStorage.getItem('checkedSwitchSearch') === 'on';
            const searchLocal = localStorage.getItem('textSearch');
            const moviesList = filterMovies(movies, searchLocal);

            document.querySelector('.input-group__search').defaultValue = searchLocal;
            document.querySelector('.switch-box__form-checkbox').checked = switchBoxLocal;

            if (switchBoxLocal) {
                setFilteredMovies(filterDuration(moviesList));
            } else {
                setFilteredMovies(moviesList);
            }
        } else {
            setFilteredMovies(props.movies);
        }
    }

    function handlerToggleCheckbox(e) {
        const form = e.target.closest('form');
        const checkBox = form.querySelector('.switch-box__form-checkbox');

        localStorage.setItem('checkedSwitchSearch', `${checkBox.checked ? 'on' : 'off'}`);

        filteringMovies();
    }

    const handleLoadMore = () => {
        setVisibleMovies(visibleMovies + (width >= SIZE_DESKTOP ? SHOW_MORE_DESKTOP : SHOW_MORE_NO_DESKTOP));
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
                handlerToggleCheckbox={handlerToggleCheckbox}
            />
            <section className='elements'>
                <MoviesCardList
                    isMySave={false}
                    count={visibleMovies}
                    movies={filteredMovies}
                    savedMovies={props.savedMovies}
                    onCardDelete={props.onCardDelete}
                    handleLikeClick={props.handleLikeClick}
                />
            </section>
            <BoxMore
                isMySave={false}
                onClick={handleLoadMore}
                isVisible={filteredMovies.length > visibleMovies}
            />
            <Footer/>
        </main>
    );
}

export default Movies;