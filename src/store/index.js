import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { movies } from './movies';
import { actors } from './actors';

const rootStore = combineReducers({
    movies,
    actors
});

export default function configureStore(preloadedState) {
    return createStore(
      rootStore,
      preloadedState,
      applyMiddleware(thunkMiddleware)
    )
  }



