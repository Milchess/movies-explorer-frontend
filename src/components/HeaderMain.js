import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import headerLogo from '../images/logoS.svg';

function HeaderMain() {
    return (
        <div className="header-landing">
            <img alt="Логотип сайта" className="logo" src={headerLogo} />
            <div className="btn-box">
                <Switch>
                    <Route path="/signup">
                        <Link to="/signin" className="btn-enter hover-style">Войти</Link>
                    </Route>
                    <Route path="/signin">
                        <Link to="/signup" className="btn-reg hover-style">Регистрация</Link>
                    </Route>
                    <Route path="/">
                        <Link to="/signup" className="btn-reg hover-style">Регистрация</Link>
                        <Link to="/signin" className="btn-enter hover-style">Войти</Link>
                    </Route>
                </Switch>

            </div>
        </div>
    );
}

export default HeaderMain;