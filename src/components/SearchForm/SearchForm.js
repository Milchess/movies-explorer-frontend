import React from 'react';
import '../../index.css';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className='search'>
            <form className='input-group'>
                <input className='input-group__search' type='text' placeholder='Фильм' required/>
                <button className='input-group__btn-search hover-style' type='submit'>Поиск</button>
            </form>
            <FilterCheckbox/>
        </section>
    )
}

export default SearchForm;