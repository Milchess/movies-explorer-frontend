import React from 'react';

function Profile() {
    return (
        <div className="user-profile">
            <h1 className="user-profile__title">Привет, Ксения!</h1>
            <form className="form form__result">
                <label className="form__label form__label_result">Имя
                    <input className="form__input form__input_result" type="text" required placeholder="Ксения" /></label>
                <label className="form__label form__label_result">E-mail
                    <input className="form__input form__input_result" type="email" required
                           placeholder="pochta@yandex.ru" /></label>
            </form>
            <div className="user-profile__btn-box">
                <button className="user-profile__edit hover-style" aria-label="Редактировать"
                        type="button">Редактировать
                </button>
                <button className="user-profile__exit hover-style" aria-label="Выйти из аккаунта" type="button">Выйти из
                    аккаунта
                </button>
            </div>
        </div>
    )
}

export default Profile;