import React from 'react';
import '../../index.css';
import './MoviesCard.css';
import Pic1 from '../../images/pic__1.svg';
import { Link } from 'react-router-dom';

function MoviesCard(props) {
    return (
            <li className='grid-card'>
                <Link to={{ pathname: props.linkMovies }} className='grid-card__container hover-style' target='_blank'>
                    <img alt={props.description} className='grid-card__image' src={Pic1}/>
                    <div className='grid-card__item'>
                        <h2 className='grid-card__title'>{props.description}</h2>
                        <button aria-label={props.isMySave ? 'Удалить' : 'Нравится'} className={`hover-style ${props.isMySave ? 'grid-card__delete' : 'grid-card__like'}`} type='button'></button>
                    </div>
                    <p className='grid-card__time'>1ч 47м</p>
                </Link>
            </li>
    );
}

export default MoviesCard;