import React from "react";

class MainApi extends React.Component {
    constructor(props) {
        super(props);

        this._baseUrl = 'https://movies-explorer-milchess.nomoredomains.monster/api/';
        this._headers = {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
    }

    _get(link) {
        return fetch(this._baseUrl + link, {
            method: 'GET',
            headers: this._headers,
        })
            .then((res) => this._getResponseData(res))
    }

    _post(link, model) {
        return fetch(this._baseUrl + link, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(model)
        })
            .then((res) => this._getResponseData(res))
    }

    _patch(link, model) {
        return fetch(this._baseUrl + link, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(model)
        })
            .then((res) => this._getResponseData(res))
    }

    _delete(link) {
        return fetch(this._baseUrl + link, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then((res) => this._getResponseData(res))
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getInitialMovies() {
        return this._get('movies');
    }

    getUserInformation() {
        return this._get('users/me');
    }

    setUserUpdate(model) {
        return this._patch('users/me', model);
    }

    setCreateMovie(data) {
        const model = {
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
            description: data.description,
            image: 'https://api.nomoreparties.co' + data.image.url,
            thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
            movieId: data.id,
            trailer: data.trailerLink
        }
        return this._post('movies', model);
    }

    setDeleteMovie(id) {
        return this._delete(`movies/${id}`);
    }

    setRegistration(model) {
        return fetch(`${this._baseUrl}signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(model)
        })
            .then((res) => this._getResponseData(res))
    }

    getAuthorization(model) {
        return fetch(`${this._baseUrl}signin`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(model)
        })
            .then((res) => this._getResponseData(res))
    }
}

const mainApi = new MainApi();

export default mainApi;