import { MovieTypes } from "../constants/movie-types";

const initialState = {
    people: [],
    peopleName: "",
    filmData: [],
    description: "",
    loading: false,
    lastYear: []
}

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case MovieTypes.SET_PEOPLE_DATA:
            return { ...state, people: payload };
        case MovieTypes.SET_PEOPLE_NAME:
            return { ...state, peopleName: payload };
        case MovieTypes.SET_FILMS_DATA:
            return { ...state, filmData: payload };
        case MovieTypes.SET_DESCRIPTION:
            return { ...state, description: payload };
        case MovieTypes.SET_LOADING:
            return { ...state, loading: payload };
        case MovieTypes.SET_LAST_YEAR:
            return { ...state, lastYear: payload };
        default:
            return state;
    }
}