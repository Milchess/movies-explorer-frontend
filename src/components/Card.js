import React from 'react';
import Pic1 from '../images/pic__1.svg';
import Pic2 from '../images/pic__2.svg';
import Pic3 from '../images/pic__3.svg';

function Card(props) {
    return (
        <div className='page'>
            <div className='search'>
                <div className='input-group'>
                    <input className='input-search' type='text' placeholder='Фильм'/>
                    <button className='button-search hover-style' type='button'>Поиск</button>
                </div>
                <div className='switch-box'>
                    <label className='switch'>
                        <input className='checkbox' type='checkbox'/>
                        <span className='slider'></span>
                    </label>
                    <p className='switch-text'>Короткометражки</p>
                </div>
            </div>
            <div className='line-box' hidden={props.isSavedFilms}></div>
            <div className='elements'>
                <ul className='grid-cards'>
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
                    <li className='grid-card'>
                        <article className='grid-card__container hover-style'>
                            <img alt='pic2' className='grid-card__image' src={Pic2}/>
                            <div className='grid-card__item'>
                                <h2 className='grid-card__title'>Киноальмонах '100 лет дизайна'</h2>
                                <button aria-label='Нравится' className='grid-card__like' type='button'></button>
                            </div>
                            <p className='grid-card__time'>1ч 3м</p>
                        </article>
                    </li>
                    <li className='grid-card'>
                        <article className='grid-card__container hover-style'>
                            <img alt='pic3' className='grid-card__image' src={Pic3}/>
                            <div className='grid-card__item'>
                                <h2 className='grid-card__title'>В погоне за Бенкси</h2>
                                <button aria-label='Нравится' className='grid-card__like' type='button'></button>
                            </div>
                            <p className='grid-card__time'>1ч 42м</p>
                        </article>
                    </li>
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
                    <li className='grid-card'>
                        <article className='grid-card__container hover-style'>
                            <img alt='pic2' className='grid-card__image' src={Pic2}/>
                            <div className='grid-card__item'>
                                <h2 className='grid-card__title'>Киноальмонах '100 лет дизайна'</h2>
                                <button aria-label='Нравится' className='grid-card__like' type='button'></button>
                            </div>
                            <p className='grid-card__time'>1ч 3м</p>
                        </article>
                    </li>
                    <li className='grid-card'>
                        <article className='grid-card__container hover-style'>
                            <img alt='pic3' className='grid-card__image' src={Pic3}/>
                            <div className='grid-card__item'>
                                <h2 className='grid-card__title'>В погоне за Бенкси</h2>
                                <button aria-label='Нравится' className='grid-card__like' type='button'></button>
                            </div>
                            <p className='grid-card__time'>1ч 42м</p>
                        </article>
                    </li>
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
                    <li className='grid-card'>
                        <article className='grid-card__container hover-style'>
                            <img alt='pic2' className='grid-card__image' src={Pic2}/>
                            <div className='grid-card__item'>
                                <h2 className='grid-card__title'>Киноальмонах '100 лет дизайна'</h2>
                                <button aria-label='Нравится' className='grid-card__like' type='button'></button>
                            </div>
                            <p className='grid-card__time'>1ч 3м</p>
                        </article>
                    </li>
                    <li className='grid-card'>
                        <article className='grid-card__container hover-style'>
                            <img alt='pic3' className='grid-card__image' src={Pic3}/>
                            <div className='grid-card__item'>
                                <h2 className='grid-card__title'>В погоне за Бенкси</h2>
                                <button aria-label='Нравится' className='grid-card__like' type='button'></button>
                            </div>
                            <p className='grid-card__time'>1ч 42м</p>
                        </article>
                    </li>
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
                    <li className='grid-card'>
                        <article className='grid-card__container hover-style'>
                            <img alt='pic2' className='grid-card__image' src={Pic2}/>
                            <div className='grid-card__item'>
                                <h2 className='grid-card__title'>Киноальмонах '100 лет дизайна'</h2>
                                <button aria-label='Нравится' className='grid-card__like' type='button'></button>
                            </div>
                            <p className='grid-card__time'>1ч 3м</p>
                        </article>
                    </li>
                    <li className='grid-card'>
                        <article className='grid-card__container hover-style'>
                            <img alt='pic3' className='grid-card__image' src={Pic3}/>
                            <div className='grid-card__item'>
                                <h2 className='grid-card__title'>В погоне за Бенкси</h2>
                                <button aria-label='Нравится' className='grid-card__like' type='button'></button>
                            </div>
                            <p className='grid-card__time'>1ч 42м</p>
                        </article>
                    </li>
                </ul>
            </div>
            <div className='box-more'>
                <button className='btn-more hover-style' type='button' aria-label='Ещё'>Ещё</button>
            </div>
        </div>
    );
}

export default Card;