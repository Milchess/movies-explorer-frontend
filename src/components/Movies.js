import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCard from './MoviesCard/MoviesCard';
import BoxMore from './BoxMore/BoxMore';
import '../index.css';

function Movies() {
    return (
        <>
            <SearchForm/>
            <div className='elements'>
                <ul className='grid-cards'>
                    <MoviesCard
                        isMySave={false}
                    />
                </ul>
            </div>
            <BoxMore/>
        </>
    );
}

export default Movies;