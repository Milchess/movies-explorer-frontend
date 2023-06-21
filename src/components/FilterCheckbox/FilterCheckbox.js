import React from 'react';
import '../../index.css';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <form className="switch-box">
            <label className="switch hover-style">
                <input className="switch__checkbox" type="checkbox"/>
                <span className="switch__slider"></span>
            </label>
            <p className="switch-box__text">Короткометражки</p>
        </form>
    );
}

export default FilterCheckbox;