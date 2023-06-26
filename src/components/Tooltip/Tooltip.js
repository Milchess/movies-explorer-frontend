import React from 'react';
import './Tooltip.css';
import '../../index.css';

function Tooltip({text, onClose, isOpen}) {
    return (
        <section  className={`popup-tooltip ${isOpen && "popup_opened"}`}>
            <div className="popup-tooltip__container">
                <p className="popup-tooltip__text">{text}</p>
                <button
                    aria-label="Закрыть"
                    className="popup-tooltip__btn-close hover-style"
                    type="button"
                    onClick={onClose}>Закрыть</button>
            </div>
        </section>
    )
}

export default Tooltip;

