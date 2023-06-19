import React from 'react';
import '../../index.css';
import './MoviesCard.css';
import Pic1 from '../../images/pic__1.svg';

function MoviesCard() {
    return (
        <li className='grid-card'>
            <article className='grid-card__container hover-style'>
                <img alt='pic1' className='grid-card__image' src={Pic1}/>
                <div className='grid-card__item'>
                    <h2 className='grid-card__title'>33 слова о дизайне</h2>
                    <button aria-label='Нравится' className='grid-card__like' type='button'></button>
                </div>
                <p className='grid-card__time'>1ч 47м</p>
            </article>
        </li>
    );
}

export default MoviesCard;