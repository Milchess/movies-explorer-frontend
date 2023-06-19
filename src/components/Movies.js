import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCard from './MoviesCard/MoviesCard';

function Movies(props) {
    return (
        <div className='page'>
            <SearchForm/>
            <div className='line-box' hidden={props.isSavedFilms}></div>
            <div className='elements'>
                <ul className='grid-cards'>
                    <MoviesCard/>
                </ul>
            </div>
            <div className='box-more'>
                <button className='btn-more hover-style' type='button' aria-label='Ещё'>Ещё</button>
            </div>
        </div>
    );
}

export default Movies;