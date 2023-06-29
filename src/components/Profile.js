import React, { useContext, useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import useFormValidation from './FormValidator';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import MenuBurger from './MenuBurger/MenuBurger';
import Header from './Header/Header';
import { regexEMail, regexName } from '../constant';

function Profile(props) {
    const { name, email } = useContext(CurrentUserContext);
    const [isEditProfile, setEditProfile] = useState(props.init);
    const [isDisable, setDisable] = useState(true);

    const { values, handleChange, errors } = useFormValidation();

    const toggleEditProfileMode = () => {
        setEditProfile(!isEditProfile);
    }

    const handleInputValue = (e) => {
        handleChange(e);

        const form = e.target.closest('form');
        const [nameProfile, emailProfile] = form.querySelectorAll('.form__input');

        if ((nameProfile.value !== name || emailProfile.value !== email) && form.checkValidity())
            setDisable(false);
        else
            setDisable(true);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (values.name !== name || values.email !== email) {
            props.onSubmit({
                name: values.name ?? name,
                email: values.email ?? email,
            });
        } else {
            props.toolTipText('Ничего не изменилось');
            props.onToolTip();
        }
    }

    return (
        <main>
            <MenuBurger
                handlerClickClose={props.handlerClickClose}
                isMenuOpen={props.isMenuOpen}
            />
            <Header
                onButtonClick={props.handlerClickClose}
                loggedIn={props.loggedIn}
            />
            <section className="user-profile">
                <h1 className="user-profile__title">{`Привет, ${name}!`}</h1>
                <form className="form form_result" onSubmit={handleSubmit}>
                    <label className="form__label form__label_result">Имя
                        <input
                            className="form__input form__input_result"
                            type="text"
                            name='name'
                            required
                            placeholder='Введите ваше имя'
                            pattern={regexName}
                            minLength='2'
                            maxLength='30'
                            disabled={isEditProfile}
                            onChange={handleInputValue}
                            defaultValue={values?.name || name}/>
                    </label>
                    <span className="form__error name-error">{errors.name}</span>
                    <label className="form__label form__label_result">E-mail
                        <input
                            className="form__input form__input_result"
                            type="email"
                            name="email"
                            required
                            placeholder='Введите вашу электронную почту'
                            minLength='2'
                            maxLength='30'
                            pattern={regexEMail}
                            disabled={isEditProfile}
                            onChange={handleInputValue}
                            defaultValue={values?.email || email}/>
                    </label>
                    <span className="form__error">{errors.email}</span>
                    <button type="submit"
                            className={`form__btn-result
                            form__btn-result_profile
                            ${isEditProfile && 'style-hidden'}
                            ${!isDisable && 'hover-style'}
                            ${isDisable && 'btn-disabled'}`}
                            disabled={isDisable}
                    >Сохранить</button>
                </form>
                <div className={`user-profile__btn-box ${!isEditProfile && 'style-hidden'}`}>
                    <button className="user-profile__edit hover-style" aria-label="Редактировать"
                            type="button" onClick={toggleEditProfileMode}>Редактировать
                    </button>
                    <Link to="/" className="user-profile__exit hover-style" aria-label="Выйти из аккаунта"
                          type="button" onClick={props.signOut}>Выйти из
                        аккаунта
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Profile;