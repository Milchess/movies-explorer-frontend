import React from 'react';
import '../../index.css';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="switch-box">
            <label className="switch">
                <input className="switch__checkbox" type="checkbox"/>
                <span className="switch__slider"></span>
            </label>
            <p className="switch-box__text">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;