import { MovieTypes } from "../constants/movie-types";

export const setPeopleName = (peopleName) => {
    return {
        type: MovieTypes.SET_PEOPLE_NAME,
        payload: peopleName
    }
}

export const setPeopleData = (peopleData) => {
    return {
        type: MovieTypes.SET_PEOPLE_DATA,
        payload: peopleData
    }
}

export const setFilmsData = (filmsData) => {
    return {
        type: MovieTypes.SET_FILMS_DATA,
        payload: filmsData
    }
}

export const setDescription = (description) => {
    return {
        type: MovieTypes.SET_DESCRIPTION,
        payload: description
    }
}

export const setLoading = (loading) => {
    return {
        type: MovieTypes.SET_LOADING,
        payload: loading
    }
}

export const setLastYear = (lastYear) => {
    return {
        type: MovieTypes.SET_LAST_YEAR,
        payload: lastYear
    }
}