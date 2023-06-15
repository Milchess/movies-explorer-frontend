import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="page-error">
            <h1 className="page-error__title page__error-style">404</h1>
            <p className="page-error__subtitle page__error-style">Страница не найдена</p>
            <Link href="#" className="page-error__link-back page__error-style hover-style">Назад</Link>
        </div>
    );
}

export default ErrorPage;