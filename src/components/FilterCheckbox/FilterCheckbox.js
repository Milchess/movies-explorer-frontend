import React from 'react';
import '../../index.css';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="switch-box">
            <label className="switch">
                <input className="checkbox" type="checkbox"/>
                <span className="slider"></span>
            </label>
            <p className="switch-box__text">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;