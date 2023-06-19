import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCard from './MoviesCard/MoviesCard';
import BoxMore from './BoxMore/BoxMore';

function SavedMovies() {
    return (
        <div className='page'>
            <SearchForm/>
            <div className='line-box'></div>
            <div className='elements'>
                <ul className='grid-cards'>
                    <MoviesCard/>
                </ul>
            </div>
            <BoxMore/>
        </div>
    );
}

export default SavedMovies;