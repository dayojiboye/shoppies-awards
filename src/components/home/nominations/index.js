import React from 'react';

import './styles.scss';

const Nominations = ({ nominations, handleDeleteBtn }) => {
  return (
    <div className="nominations">
      <div className="nominations__header">
        <h2>Your Nominations</h2>
      </div>

      <div className="nominations__list">
        <div className="nominations_count">
          <p>
            You have <span>{5 - nominations.length}</span> nomination(s) left
          </p>
        </div>

        {nominations && nominations.length === 0 && (
          <div className="nominations_empty">
            <span>No Nomination! Vote a movie now!</span>
          </div>
        )}

        {nominations && nominations.length > 0 && (
          <ul>
            {nominations.map((item) => {
              return (
                <li key={item.id}>
                  <div className="nomination_item_poster">
                    <img
                      src={item.imgUrl}
                      alt={`${item.title} Poster`}
                      onError={(e) =>
                        (e.target.src = `https://via.placeholder.com/400x600.png?text=${item.title}`)
                      }
                    />
                  </div>

                  <div className="nomination_item_title text_max_width">
                    <span>{item.title}</span>
                  </div>

                  <div className="nomination_item_year">
                    <span>{item.year}</span>
                  </div>

                  <div className="nomination_delete_btn">
                    <button
                      onClick={() => {
                        handleDeleteBtn(item.id);
                      }}
                    >
                      Remove Movie
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nominations;
