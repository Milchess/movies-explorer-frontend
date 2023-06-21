import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import headerLogo from '../../images/logoS.svg';
import '../../index.css';
import './HeaderMain.css';

function HeaderMain() {
    return (
        <section className='header-landing'>
            <Link to='/'><img alt='Логотип сайта' className='logo' src={headerLogo}/></Link>
            <div className='btn-box'>
                <Switch>
                    <Route path='/signup'>
                        <Link to='/signin' className='btn-enter hover-style'>Войти</Link>
                    </Route>
                    <Route path='/signin'>
                        <Link to='/signup' className='btn-reg hover-style'>Регистрация</Link>
                    </Route>
                    <Route path='/'>
                        <Link to='/signup' className='btn-reg hover-style'>Регистрация</Link>
                        <Link to='/signin' className='btn-enter hover-style'>Войти</Link>
                    </Route>
                </Switch>
            </div>
        </section>
    );
}

export default HeaderMain;