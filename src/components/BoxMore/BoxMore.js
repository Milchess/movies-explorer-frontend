import React from 'react';
import '../../index.css';
import './BoxMore.css';

function BoxMore(props) {
    return (
        <section className={`box-more ${props.isSaveMovies && 'box-more_saved'}`}>
            <button className={`box-more__btn hover-style ${props.isSaveMovies && 'style-hidden'}`} type='button' aria-label='Ещё'>Ещё</button>
        </section>
    )
}

export default BoxMore;