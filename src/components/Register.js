import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/logoS.svg';

function Register() {
    return (
        <section className="result-form">
            <Link to='/'><img className="logo logo_center hover-style" src={headerLogo} alt="Логотип сайта"/></Link>
            <h1 className="result-form__title">Добро пожаловать!</h1>
            <form className="form">
                <label className="form__label">Имя</label>
                <input className="form__input" type="text" required minLength='2' maxLength='30' placeholder='имя'/>
                <span className="form__error"></span>
                <label className="form__label">E-mail</label>
                <input className="form__input" type="email" required minLength='2' maxLength='30' placeholder='e-mail'/>
                <span className="form__error"></span>
                <label className="form__label">Пароль</label>
                <input className="form__input" type="password" required minLength='2' maxLength='30' placeholder='пароль'/>
                <span className="form__error">Что-то пошло не так...</span>
            </form>
            <button className="result-form__btn hover-style" aria-label="Зарегистрироваться"
                    type="button">Зарегистрироваться
            </button>
            <p className="result-form__subtitle">Уже зарегистрированы?
                <Link to="/signin" className="result-form__subtitle-link hover-style">Войти</Link>
            </p>
        </section>
    );
}

export default Register;