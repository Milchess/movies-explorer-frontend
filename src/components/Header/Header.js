import React from 'react';
import headerLogo from '../../images/logoS.svg';
import { Link } from 'react-router-dom';
import '../../index.css';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <div className='header'>
            <Link to='/'><img className='logo' src={headerLogo} alt='Логотип сайта'/></Link>
            <Navigation/>
        </div>
    );
}

export default Header;