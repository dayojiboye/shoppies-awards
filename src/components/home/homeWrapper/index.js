import React, { useState } from 'react';

import Movies from '../movies';
import Nominations from '../nominations';
import Input from '../../ui/input';
import axios from '../../../utils/axios/instance';

import './styles.scss';

const HomeWrapper = ({ isOpen, nominations, handleNominate, handleDelete }) => {
  const [searchValue, setSearchValue] = useState('');

  const [movies, setMovies] = useState([]);

  const inputHandler = async (e) => {
    setSearchValue(e.target.value);

    if (e.target.value.length >= 3) {
      try {
        const response = await axios.get(
          `/?s=${e.target.value}&apikey=839a5b1a`
        );
        // console.log(response.data.Search)
        setMovies(response.data.Search);
      } catch (err) {
        console.log(err);
      }
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="home_container">
      <div className={`home_container__nominations ${isOpen ? '_show' : ''}`}>
        <Nominations nominations={nominations} handleDeleteBtn={handleDelete} />
      </div>

      <div className="home_container__movies">
        <div className="text_lead">
          <h1>Search & Nominate your favorite movies</h1>
        </div>

        {nominations && nominations.length === 5 && (
          <div className="nomination_limit_exceeded">
            <span>You have exceeded the limit of nominations, thank you!</span>
          </div>
        )}

        <div className="input_search_wrapper">
          <Input
            type="search"
            placeholder="Search..."
            aria-label="search movies"
            onKeyUp={inputHandler}
          />
        </div>

        <Movies
          inputValue={searchValue}
          movies={movies}
          nominate={handleNominate}
          nominations={nominations}
        />
      </div>
    </div>
  );
};

export default HomeWrapper;
