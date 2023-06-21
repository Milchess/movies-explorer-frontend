import React, { useCallback } from 'react';
import '../../index.css';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import AccountIcon from '../../images/iconProfile.svg';
import BurgerMenu from '../../images/burgerMenu.svg';

function Navigation(props) {
    return (
        <section className="nav">
            <ul className="nav__profile">
                <NavLink to="/movies"
                         className={useCallback((isActive) => `nav__text hover-style ${isActive ? 'nav__text_active' : ''}`, [])}>
                    <li>Фильмы</li>
                </NavLink>
                <NavLink to="/saved-movies"
                         className={useCallback((isActive) => `nav__text hover-style ${isActive ? 'nav__text_active' : ''}`, [])}>
                    <li>Сохранённые фильмы</li>
                </NavLink>
            </ul>
            <Link to="/profile" className="account hover-style">
                <h3 className="account__text">Аккаунт</h3>
                <img className="account__icon" src={AccountIcon} alt="Значок профиля"/>
            </Link>
            <button className="burger-menu hover-style" type="button" onClick={props.onButtonClick}>
                <img className="burger-menu__img" src={BurgerMenu} alt="Меню бургера"/>
            </button>
        </section>
    );
}

export default Navigation;