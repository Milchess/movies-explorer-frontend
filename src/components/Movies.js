import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCard from './MoviesCard/MoviesCard';
import BoxMore from './BoxMore/BoxMore';
import '../index.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MenuBurger from './MenuBurger/MenuBurger';

function Movies(props) {
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
                onSearch={props.onSearch}/>
            <section className='elements'>
                <ul className='grid-cards'>
                    <MoviesCard
                        isMySave={false}
                        description={'33 слова о дизайне'}
                        linkMovies={'https://www.kinopoisk.ru/film/1302273/'}
                    />
                </ul>
            </section>
            <BoxMore/>
            <Footer/>
        </main>
    );
}

export default Movies;