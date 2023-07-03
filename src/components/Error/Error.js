import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../index.css';
import './Error.css';

function ErrorPage() {
    const history = useHistory();

    return (
        <main>
            <section className="page-error">
                <h1 className="page-error__title page-error__style">404</h1>
                <p className="page-error__subtitle page-error__style">Страница не найдена</p>
                <Link
                    onClick={history.goBack}
                    className="page-error__link-back page-error__style hover-style"
                    to=''
                >Назад</Link>
            </section>
        </main>
    );
}

export default ErrorPage;