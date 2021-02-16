import React, { useContext, useRef } from 'react';

import Movies from '../movies';
import Nominations from '../nominations';
import Input from '../../ui/input';
import { Context } from '../../../context';
import axios from '../../../utils/axios/instance';
import * as actions from '../../../context/actions';
import Spinner from '../../ui/spinner';

import './styles.scss';

const HomeContainer = ({ isOpen }) => {
  const [state, dispatch] = useContext(Context);

  const { movies, loading } = state;

  const inputEl = useRef(null);

  const inputHandler = async (e) => {
    if (e.target.value.length >= 3) {
      dispatch(actions.loadingMovies(true));

      try {
        const response = await axios.get(
          `/?s=${e.target.value}&apikey=839a5b1a`
        );
        // console.log(response.data.Search);
        dispatch(actions.fetchMovies(response.data.Search));
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(actions.loadingMovies(false));
      }
    } else {
      dispatch(actions.fetchMovies([]));
    }
  };

  return (
    <div className="home_container">
      <div className={`home_container__nominations ${isOpen ? '_show' : ''}`}>
        <Nominations />
      </div>

      <div className="home_container__movies">
        <div className="text_lead">
          <h1>Search & Nominate your favorite movies</h1>
        </div>

        <div className="input_search_wrapper">
          <Input
            inputRef={inputEl}
            type="search"
            placeholder="Search..."
            aria-label="search movies"
            onChange={inputHandler}
          />
        </div>

        {loading && <Spinner />}

        {!loading && (
          <Movies
            movies={movies}
            inputValue={inputEl.current ? inputEl.current.value : ''}
          />
        )}
      </div>
    </div>
  );
};

export default HomeContainer;
