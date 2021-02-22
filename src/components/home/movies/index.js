import React from 'react';

import './styles.scss';

const Movies = ({ inputValue, movies, nominate, nominations }) => {
  const disableButton = (movieId) => {
    const movieExists = nominations.some((item) => {
      return item.id === movieId;
    });

    return movieExists;
  };

  const checkNominationLimit = () => {
    if (nominations.length === 5) return true;
  };

  return (
    <div className="movies">
      {movies && movies.length > 0 && (
        <div className="movies__result_text">
          <p>
            <span>{movies.length}</span> results for keyword{' '}
            <span>"{inputValue}"</span> found
          </p>
        </div>
      )}

      <ul>
        {movies &&
          movies.map((item, index) => {
            return (
              <li key={index}>
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
                  <button
                    disabled={
                      disableButton(item.imdbID) || checkNominationLimit()
                    }
                    className={`${
                      disableButton(item.imdbID) ? '_nominated' : ''
                    }`}
                    data-nominated="false"
                    onClick={() => {
                      nominate({
                        title: item.Title,
                        imgUrl: item.Poster,
                        year: item.Year,
                        id: item.imdbID,
                      });
                    }}
                  >
                    {checkNominationLimit() && !disableButton(item.imdbID)
                      ? 'Limit Exceeded'
                      : disableButton(item.imdbID)
                      ? 'Nominated'
                      : 'Nominate'}
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
