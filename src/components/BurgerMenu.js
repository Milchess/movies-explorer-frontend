import React from 'react';
import BurgerMenu from '../images/burgerMenu.svg';
import AccountIcon from '../images/iconProfile.svg';
import { Link } from 'react-router-dom';

function MenuBurger() {
    return (
        <div className="exit-menu">
            <button className="exit-menu__btn" type="button">
                <img src={BurgerMenu} className="exit-menu__btn-img" alt="Кнопка закрытия" />
            </button>
            <nav className="main-menu">
                <ul className="main-menu__elements">
                    <li className="main-menu__element">
                        <Link href="#" className="main-menu__link hover-style">Главная</Link>
                    </li>
                    <li className="main-menu__element">
                        <Link href="#" className="main-menu__link hover-style">Фильмы</Link>
                    </li>
                    <li className="main-menu__element">
                        <Link href="#" className="main-menu__link hover-style">Сохранённые фильмы</Link>
                    </li>
                </ul>
            </nav>
            <div className="main-account">
                <h3 className="main-account__text">Аккаунт</h3>
                <img className={AccountIcon} src="src/images/iconProfile.svg" alt="Значок профиля" />
            </div>
        </div>
    )
}

export default MenuBurger;