import React from 'react';
import './PopupError.css';
import '../../index.css';

function PopupError() {
    return (
        <section className='popup-error'>
            <div className="popup-error__container">
                <p className="popup-error__text">Ошибка</p>
                <button
                    aria-label="Закрыть"
                    className="popup-error__btn-close hover-style"
                    type="button">Закрыть</button>
            </div>
        </section>
    )
}

export default PopupError;

