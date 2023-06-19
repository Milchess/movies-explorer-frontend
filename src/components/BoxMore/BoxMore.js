import React from 'react';
import '../../index.css';
import './BoxMore.css';

function BoxMore() {
    return (
        <div className='box-more'>
            <button className='box-more__btn hover-style' type='button' aria-label='Ещё'>Ещё</button>
        </div>
    )
}

export default BoxMore;