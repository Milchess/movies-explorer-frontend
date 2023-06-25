import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCard from './MoviesCard/MoviesCard';
import BoxMore from './BoxMore/BoxMore';
import '../index.css';

function Movies(props) {
    return (
        <main>
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
        </main>
    );
}

export default Movies;