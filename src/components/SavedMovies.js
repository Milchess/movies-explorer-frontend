import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCard from './MoviesCard/MoviesCard';
import BoxMore from './BoxMore/BoxMore';
import MenuBurger from './MenuBurger/MenuBurger';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function SavedMovies(props) {
    return (
        <main>
            <MenuBurger
                handlerClickClose={props.onButtonClick}
                isMenuOpen={props.isMenuOpen}
            />
            <Header
                onButtonClick={props.onButtonClick}
            />
            <SearchForm
                onSearch={props.onSearch}
            />
            <div className='line-box'></div>
            <div className='elements'>
                <ul className='grid-cards'>
                    <MoviesCard
                        isMySave={true}
                        description={'33 слова о дизайне'}
                        linkMovies={'https://www.kinopoisk.ru/film/1302273/'}
                    />
                </ul>
            </div>
            <BoxMore
                isSaveMovies={true}
            />
            <Footer/>
        </main>
    );
}

export default SavedMovies;