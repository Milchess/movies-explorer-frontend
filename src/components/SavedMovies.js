import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCard from './MoviesCard/MoviesCard';
import BoxMore from './BoxMore/BoxMore';

function SavedMovies() {
    return (
        <main>
            <SearchForm/>
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
        </main>
    );
}

export default SavedMovies;