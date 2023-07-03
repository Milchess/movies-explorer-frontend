import React from 'react';
import headerLogo from '../../images/logoS.svg';
import { Link } from 'react-router-dom';
import '../../index.css';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import NavigationNotAuthorized from '../NavigationNotAuthorized';

function Header(props) {
    return (
        <header className={`header ${props.isMain && 'header_main'}`}>
            <Link to="/"><img className="logo hover-style" src={headerLogo} alt="Логотип сайта"/></Link>
            {props.loggedIn
                ? <Navigation
                    onButtonClick={props.onButtonClick}
                    isMain={props.isMain}
                />
                : <NavigationNotAuthorized/>}
        </header>
    );
}

export default Header;