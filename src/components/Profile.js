import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Profile(props) {
    return (
        <section className='user-profile'>
            <h1 className='user-profile__title'>Привет, Ксения!</h1>
            <form className='form form_result'>
                <label className='form__label form__label_result'>Имя
                    <input className='form__input form__input_result' type='text' required
                           placeholder='Ксения' minLength={2} maxLength={30} disabled={props.isEditProfile}/></label>
                <label className='form__label form__label_result'>E-mail
                    <input className='form__input form__input_result' type='email' required
                           placeholder='pochta@yandex.ru' minLength={2} maxLength={30} disabled={props.isEditProfile}/></label>
                <button type='submit' className={`result-form__btn result-form__btn_profile hover-style ${props.isEditProfile && 'style-hidden'}`}>Сохранить</button>
            </form>
            <div className={`user-profile__btn-box ${!props.isEditProfile && 'style-hidden'}`}>
                <button className='user-profile__edit hover-style' aria-label='Редактировать'
                        type='button' onClick={props.onButtonClick}>Редактировать
                </button>
                <Link to='/' className='user-profile__exit hover-style' aria-label='Выйти из аккаунта' type='button'>Выйти из
                    аккаунта
                </Link>
            </div>
        </section>
    );
}

export default Profile;