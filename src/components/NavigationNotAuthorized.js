import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function NavigationNotAuthorized() {
    return (
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
    )
}

export default NavigationNotAuthorized;