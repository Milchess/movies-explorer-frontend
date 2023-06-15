import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/logoS.svg';

function Register() {
    return (
        <div className="result-form">
            <img className="logo" src={headerLogo} alt="Логотип сайта" />
                <h1 className="result-form__title">Добро пожаловать!</h1>
                <form className="form">
                        <label className="form__label">Имя</label>
                        <input className="form__input" type="text" required />
                        <span className="form__error"></span>
                        <label className="form__label">E-mail</label>
                        <input className="form__input" type="email" required />
                        <span className="form__error"></span>
                        <label className="form__label">Пароль</label>
                        <input className="form__input" type="password" required />
                        <span className="form__error">Что-то пошло не так...</span>
                </form>
                <button className="result-form__btn hover-style" aria-label="Зарегистрироваться"
                        type="button">Зарегистрироваться
                </button>
                <p className="result-form__subtitle">Уже зарегистрированы?
                    <Link href="#" className="result-form__subtitle-link hover-style">Войти</Link>
                </p>
        </div>
    );
}

export default Register;