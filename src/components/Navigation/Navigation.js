import React, { useCallback } from 'react';
import '../../index.css';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import AccountIcon from '../../images/iconProfile.svg';
import BurgerMenu from '../../images/burgerMenu.svg';

function Navigation(props) {
    return (
        <nav className='nav'>
            <nav className='nav__profile'>
                <NavLink to='/movies' className={useCallback((isActive) => `nav__text hover-style ${isActive ? 'nav__text_active' : ''}`, [])}>Фильмы</NavLink>
                <NavLink to='/saved-movies' className={useCallback((isActive) => `nav__text hover-style ${isActive ? 'nav__text_active' : ''}`, [])}>Сохранённые фильмы</NavLink>
            </nav>
            <Link to='/profile' className='account hover-style'>
                <h3 className='account__text'>Аккаунт</h3>
                <img className='account__icon' src={AccountIcon} alt='Значок профиля'/>
            </Link>
            <button className='burger-menu hover-style' type='button' onClick={props.onButtonClick}>
                <img className='burger-menu__img' src={BurgerMenu} alt='Меню бургера'/>
            </button>
        </nav>
    )
}

export default Navigation;