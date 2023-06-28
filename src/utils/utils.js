export function MinToHours(minute) {
    if (Math.round(minute / 60 < 1)) {
        return `${minute}м.`;
    } else {
        return `${Math.round(minute / 60)}ч. ${minute % 60}м.`;
    }
}

export function filterDuration(movies) {
    return movies.filter((movie) => movie.duration < 40);
}

export function filterMovies(movies, query) {
    return movies.filter((movie) => {
        const movieRu = String(movie.nameRU).toLowerCase().trim();
        const movieEn = String(movie.nameEN).toLowerCase().trim();
        const userQuery = query.toLowerCase().trim();
        return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
    });
}