import React from 'react';
import '../../index.css';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormValidation from '../FormValidator';

function SearchForm(props) {
    const { values, handleChange, errors, isValid } = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();

        props.onSearch(values);
    }

    return (
        <section className='search'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='input-group'>
                    <input
                        name='search'
                        className='input-group__search'
                        type='text'
                        placeholder='Введите название фильма'
                        required
                        onChange={handleChange}/>
                    <button
                        className='input-group__btn-search hover-style'
                        type='submit'
                        disabled={!isValid}
                    >Поиск</button>
                </div>
                <span className='form__error'>{errors.search}</span>
                <FilterCheckbox
                    handleChange={handleChange}/>
            </form>
        </section>
    )
}

export default SearchForm;