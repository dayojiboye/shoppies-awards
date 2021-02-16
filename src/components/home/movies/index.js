import React from 'react';

import './styles.scss';

const movies = ({ movies, inputValue }) => {
  return (
    <div className="movies">
      {movies && movies.length > 0 && (
        <div className="movies__result_text">
          <p>
            <span>{movies.length}</span> results for keyword{' '}
            <span>{inputValue}</span> found
          </p>
        </div>
      )}

      <ul>
        {movies &&
          movies.map((item) => {
            return (
              <li key={item.imdbID}>
                <div className="movie_poster">
                  <img
                    src={item.Poster}
                    alt={`${item.Title} Poster`}
                    onError={(e) =>
                      (e.target.src = `https://via.placeholder.com/400x600.png?text=${item.Title}`)
                    }
                  />
                </div>

                <div className="movie_title">
                  <h3>{item.Title}</h3>
                </div>

                <div className="movie_year">
                  <span>{item.Year}</span>
                </div>

                <div className="nominate_btn">
                  <button>Nominate</button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default movies;
