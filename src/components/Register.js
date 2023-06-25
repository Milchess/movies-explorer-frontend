import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/logoS.svg';
import { withRouter } from 'react-router-dom';

function Register(props) {
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[name, setName] = useState('');

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onRegistry({name, password, email});
    }

    return (
        <main>
            <section className="result-form">
                <Link to="/"><img className="logo logo_center hover-style" src={headerLogo} alt="Логотип сайта"/></Link>
                <h1 className="result-form__title">Добро пожаловать!</h1>
                <form className="form">
                    <label className="form__label">Имя</label>
                    <input
                        className="form__input"
                        type="text"
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder="имя"
                        onChange={handleChangeName}/>
                    <span className="form__error"></span>
                    <label className="form__label">E-mail</label>
                    <input
                        className="form__input"
                        type="email"
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder="e-mail"
                        onChange={handleChangeEmail}/>
                    <span className="form__error"></span>
                    <label className="form__label">Пароль</label>
                    <input
                        className="form__input"
                        type="password"
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder="пароль"
                        onChange={handleChangePassword}/>
                    <span className="form__error">Что-то пошло не так...</span>
                    <button className="form__btn-result form__btn-result_signup hover-style" aria-label="Зарегистрироваться"
                            type="submit" onClick={handleSubmit}>Зарегистрироваться
                    </button>
                </form>
                <p className="result-form__subtitle">Уже зарегистрированы?
                    <Link to="/signin" className="result-form__subtitle-link hover-style">Войти</Link>
                </p>
            </section>
        </main>
    );
}

export default withRouter(Register);