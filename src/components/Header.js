import React from 'react';
import headerLogo from '../images/logoS.svg';
import BurgerMenu from '../images/burgerMenu.svg';
import AccountIcon from '../images/iconProfile.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <img className="logo" src={headerLogo} alt="Логотип сайта" />
            <nav className="nav">
                <button className="burger-menu hover-style" type="button">
                    <img className="burger-menu__img" src={BurgerMenu} alt="Меню бургера" />
                </button>
                <nav className="nav__profile">
                    <Link to='/films' className="nav__text hover-style">Фильмы</Link>
                    <Link to='/films' className="nav__text hover-style">Сохранённые фильмы</Link>
                </nav>
                <Link to='/profile' className="account hover-style">
                    <h3 className="account__text">Аккаунт</h3>
                    <img className="account__icon" src={AccountIcon} alt="Значок профиля" />
                </Link>
            </nav>
        </div>
    )
}

export default Header;