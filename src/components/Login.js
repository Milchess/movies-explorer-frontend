import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/logoS.svg';
import { withRouter } from 'react-router-dom';

function Login(props) {
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onAuth({password, email});
    }

    return (
        <main>
            <section className="result-form">
                <Link to="/"><img className="logo logo_center hover-style" src={headerLogo} alt="Логотип сайта"/></Link>
                <h1 className="result-form__title">Рады видеть!</h1>
                <form className="form">
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
                    <span className="form__error"></span>
                    <button
                        className="form__btn-result hover-style"
                        aria-label="Войти"
                        type="submit"
                        onClick={handleSubmit}
                    >Войти</button>
                </form>
                <p className="result-form__subtitle">Ещё не зарегистрированы?
                    <Link to="/signup" className="result-form__subtitle-link hover-style">Регистрация</Link>
                </p>
            </section>
        </main>
    );
}

export default withRouter(Login);