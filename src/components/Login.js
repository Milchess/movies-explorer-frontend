import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/logoS.svg';
import { withRouter } from 'react-router-dom';
import useFormValidation from './FormValidator';
import { regexEMail } from '../constant';

function Login(props) {
    const { values, handleChange, errors, isValid } = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();

        props.onAuth(values);
    }

    return (
        <main>
            <section className="result-form">
                <Link to="/"><img className="logo logo_center hover-style" src={headerLogo} alt="Логотип сайта"/></Link>
                <h1 className="result-form__title">Рады видеть!</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label className="form__label">E-mail</label>
                    <input
                        className="form__input"
                        type="email"
                        name="email"
                        pattern={regexEMail}
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder='Введите вашу электронную почту'
                        onChange={handleChange}/>
                    <span className="form__error">{errors.email}</span>
                    <label className="form__label">Пароль</label>
                    <input
                        className="form__input"
                        type="password"
                        name="password"
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder="пароль"
                        onChange={handleChange}/>
                    <span className="form__error">{errors.password}</span>
                    <button
                        className="form__btn-result hover-style"
                        aria-label="Войти"
                        type="submit"
                        disabled={!isValid}
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