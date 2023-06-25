import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/logoS.svg';
import { withRouter } from 'react-router-dom';
import useFormValidation from './FormValidator';
import { regexEMail, regexName } from '../constant';

function Register(props) {
    const { values, handleChange, errors, isValid } = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();

        props.onRegistry(values);
    }

    return (
        <main>
            <section className="result-form">
                <Link to="/"><img className="logo logo_center hover-style" src={headerLogo} alt="Логотип сайта"/></Link>
                <h1 className="result-form__title">Добро пожаловать!</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label className="form__label">Имя</label>
                    <input
                        className="form__input"
                        type="text"
                        required
                        name='name'
                        minLength='2'
                        maxLength='30'
                        pattern={regexName}
                        placeholder='Введите ваше имя'
                        onChange={handleChange}/>
                    <span className="form__error">{errors.name}</span>
                    <label className="form__label">E-mail</label>
                    <input
                        className="form__input"
                        type="email"
                        required
                        name='email'
                        minLength='2'
                        maxLength='30'
                        pattern={regexEMail}
                        placeholder='Введите вашу электронную почту'
                        onChange={handleChange}/>
                    <span className="form__error">{errors.email}</span>
                    <label className="form__label">Пароль</label>
                    <input
                        className="form__input"
                        type="password"
                        name='password'
                        required
                        minLength='2'
                        maxLength='30'
                        placeholder="пароль"
                        onChange={handleChange}/>
                    <span className="form__error">{errors.password}</span>
                    <button
                        className="form__btn-result form__btn-result_signup hover-style"
                        aria-label="Зарегистрироваться"
                        type="submit"
                        disabled={!isValid}
                    >Зарегистрироваться</button>
                </form>
                <p className="result-form__subtitle">Уже зарегистрированы?
                    <Link to="/signin" className="result-form__subtitle-link hover-style">Войти</Link>
                </p>
            </section>
        </main>
    );
}

export default withRouter(Register);