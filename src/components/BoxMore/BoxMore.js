import React from 'react';
import '../../index.css';
import './BoxMore.css';

function BoxMore() {
    return (
        <section className='box-more'>
            <button className='box-more__btn hover-style' type='button' aria-label='Ещё'>Ещё</button>
        </section>
    )
}

export default BoxMore;