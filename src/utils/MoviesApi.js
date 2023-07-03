import React from "react";

class MoviesApi extends React.Component {
    constructor(props) {
        super(props);

        this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
    }

    _get() {
        return fetch(this._baseUrl, { method: 'GET' })
            .then((res) => this._getResponseData(res))
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getMovies() {
        return this._get();
    }
}

const moviesApi = new MoviesApi();

export default moviesApi;