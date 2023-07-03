import React, { useState } from 'react';
import '../../index.css';
import './SearchForm.css';
import '../../blocks/btn-disabled/btn-disabled.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormValidation from '../FormValidator';

function SearchForm(props) {
    const { handleChange, errors } = useFormValidation();
    const [isDisable, setDisable] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();

        props.onSearch(e);
    }

    const handleInputValue = (e) => {
        handleChange(e);

        const form = e.target.closest('form');
        const search = form.querySelector('.input-group__search');

        setDisable(search.value !== '' && form.checkValidity());
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
                        onChange={handleInputValue}/>
                    <button
                        className={`input-group__btn-search ${isDisable && 'hover-style'}  ${!isDisable && 'btn-disabled'}`}
                        type='submit'
                        disabled={!isDisable}
                    >Поиск</button>
                </div>
                <span className='form__error'>{errors.search}</span>
                <FilterCheckbox
                    handleChange={props.handlerToggleCheckbox}
                />
            </form>
        </section>
    )
}

export default SearchForm;