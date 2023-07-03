import React, { useCallback } from 'react';
import '../../index.css';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import AccountIcon from '../../images/iconProfile.svg';
import BurgerMenu from '../../images/burgerMenu.svg';

function Navigation(props) {
    const classNameText = `nav__text hover-style ${ props.isMain && 'nav__text_main'}`

    return (
        <nav className="nav">
            <ul className="nav__profile">
                <NavLink to="/movies"
                         className={useCallback((isActive) => `${classNameText} ${isActive && 'nav__text_active'}`, [classNameText])}>
                    <li>Фильмы</li>
                </NavLink>
                <NavLink to="/saved-movies"
                         className={useCallback((isActive) => `${classNameText} ${isActive && 'nav__text_active'}`, [classNameText])}>
                    <li>Сохранённые фильмы</li>
                </NavLink>
            </ul>
            <Link to="/profile" className="account hover-style">
                <span className="account__text">Аккаунт</span>
                <img className="account__icon" src={AccountIcon} alt="Значок профиля"/>
            </Link>
            <button className="burger-menu hover-style" type="button" onClick={props.onButtonClick}>
                <img className="burger-menu__img" src={BurgerMenu} alt="Меню бургера"/>
            </button>
        </nav>
    );
}

export default Navigation;