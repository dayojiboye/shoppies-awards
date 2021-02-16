import * as actionTypes from './actionTypes';

export const loadingMovies = (payload) => {
  return {
    type: actionTypes.LOADING,
    payload,
  };
};

export const fetchMovies = (payload) => {
  return {
    type: actionTypes.FETCH_MOVIES,
    payload,
  };
};
