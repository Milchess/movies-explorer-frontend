import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/logoS.svg';

function Login() {
    return (
        <div className='result-form'>
            <Link to='/'><img className='logo logo_center' src={headerLogo} alt='Логотип сайта'/></Link>
            <h1 className='result-form__title'>Рады видеть!</h1>
            <form className='form'>
                <label className='form__label'>E-mail</label>
                <input className='form__input' type='email' required minLength={2} maxLength={30}/>
                <span className='form__error'></span>
                <label className='form__label'>Пароль</label>
                <input className='form__input' type='password' required minLength={2} maxLength={30}/>
                <span className='form__error'></span>
            </form>
            <button className='result-form__btn hover-style' aria-label='Войти' type='button'>Войти</button>
            <p className='result-form__subtitle'>Ещё не зарегистрированы?
                <Link to='/signup' className='result-form__subtitle-link hover-style'>Регистрация</Link>
            </p>
        </div>
    );
}

export default Login;