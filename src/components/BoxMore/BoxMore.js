import React from 'react';
import '../../index.css';
import './BoxMore.css';

function BoxMore(props) {
    return (
        <section className='box-more'>
            {props.isVisible && <button
                className={`box-more__btn hover-style ${props.isMySave && 'style-hidden'}`}
                type='button'
                aria-label='Ещё'
                onClick={props.onClick}
            >Ещё</button>}
        </section>
    )
}

export default BoxMore;