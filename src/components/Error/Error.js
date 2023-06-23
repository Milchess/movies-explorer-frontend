import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import './Error.css';

function ErrorPage() {
    return (
        <main>
            <section className="page-error">
                <h1 className="page-error__title page-error__style">404</h1>
                <p className="page-error__subtitle page-error__style">Страница не найдена</p>
                <Link to="/" className="page-error__link-back page-error__style hover-style">Назад</Link>
            </section>
        </main>
    );
}

export default ErrorPage;