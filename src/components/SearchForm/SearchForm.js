import React from 'react';
import '../../index.css';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <form className='search'>
            <div className='input-group'>
                <input className='input-group__search' type='text' placeholder='Фильм'/>
                <button className='input-group__btn-search hover-style' type='button'>Поиск</button>
            </div>
            <FilterCheckbox/>
        </form>
    )
}

export default SearchForm;