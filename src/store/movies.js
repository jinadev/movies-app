import { FETCH_POPULAR_MOVIES } from '../constants/movies';

const initialState = {
    popular: [],
    trending: []
}

export const movies = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POPULAR_MOVIES:
          return {
              ...state,
              popular: action.payload
          }
      default:
        return state
    }
  }