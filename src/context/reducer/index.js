import * as actionTypes from '../actions/actionTypes';

export const initialState = {
  movies: [],
  loading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case actionTypes.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
