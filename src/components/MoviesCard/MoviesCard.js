import React, { useEffect, useState } from 'react';
import '../../index.css';
import './MoviesCard.css';
import { Link } from 'react-router-dom';
import { MinToHours } from '../../utils/utils';

function MoviesCard({ isMySave, card, savedMovies, onCardDelete, handleLikeClick }) {
    const [isLike, setIsLike] = useState(false);

    const time = MinToHours(card.duration);

    useEffect(() => {
        const first = savedMovies.find((saveMovie) => saveMovie.movieId === card.id);
        setIsLike(!!first);
    },[card]);

    function handleClick() {
        if (isMySave){
            onCardDelete(card._id);
        } else {
            if (isLike) {
                const [first] = savedMovies.filter((saveMovie) => saveMovie.movieId === card.id);
                onCardDelete(first._id);
                setIsLike(false);
            } else {
                handleLikeClick(card);
                setIsLike(true);
            }
        }
    }

    return (
        <li className="grid-card">
            <div className="grid-card__container">
                <Link to={{ pathname: card.trailerLink }}
                      target="_blank">
                    <img alt={`Постер фильма: ${card.nameRU}`}
                         className="grid-card__image"
                         src={isMySave ? card.image : `https://api.nomoreparties.co/${card.image.url}`}/>
                </Link>
                <div className="grid-card__item">
                    <h2 className="grid-card__title">{card.nameRU}</h2>
                    <button
                        aria-label={isMySave ? 'Удалить' : 'Нравится'}
                        className={`hover-style ${isMySave
                            ? 'grid-card__delete' 
                            : `grid-card__like ${ isLike && 'grid-card__like_active'}`
                        }`}
                        type="button"
                        onClick={handleClick}></button>
                </div>
                <p className="grid-card__time">{time}</p>
            </div>
        </li>
    );
}

export default MoviesCard;