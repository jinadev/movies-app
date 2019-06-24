import axios from 'axios';

import { FETCH_POPULAR_MOVIES } from '../constants/movies';

const setMovies = (data) => {
    return {
        type: FETCH_POPULAR_MOVIES,
        payload: data
    }
}


export const getPopularMovies = () => {
    return (dispatch) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const APP_KEY = process.env.REACT_APP_APP_KEY;
    axios(`https://${API_URL}/movie/popular?api_key=${APP_KEY}`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            mode: 'no-cors',
          }
        }
    )
    .then(res => dispatch(setMovies(res.data.results)));
    }
}