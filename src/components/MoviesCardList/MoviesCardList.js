import MoviesCard from "../MoviesCard/MoviesCard";
import '../../index.css';
import './MoviesCardList.css';
import React from 'react';


function MoviesCardList(props) {
    return (
        <ul className="grid-cards">
            {props.movies
                .slice(0, props.count)
                .map((card) => <MoviesCard
                    key={props.isMySave ? card._id : card.id}
                    isMySave={props.isMySave}
                    card={card}
                    savedMovies={props.savedMovies}
                    onCardDelete={props.onCardDelete}
                    handleLikeClick={props.handleLikeClick}
                />
            )}
        </ul>
    )
}

export default MoviesCardList;