import React from 'react';
import '../../index.css';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
    return (
        <section className="switch-box">
            <label className="switch-box__form hover-style">
                <input name='switch' className="switch-box__form-checkbox" type="checkbox" onChange={props.handleChange}/>
                <span className="switch-box__form-slider"></span>
            </label>
            <p className="switch-box__text">Короткометражки</p>
        </section>
    );
}

export default FilterCheckbox;