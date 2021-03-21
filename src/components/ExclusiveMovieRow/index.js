import React from "react";
import "./styles.css";

const ExclusiveMovieRow = ({title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="exclusiveMovieRow-area">
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <div class="exclusiveMovieRow-item" key={key}>
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title}
              />
            </div>
          ))}
      </div>
    </div>
  )
};

export default ExclusiveMovieRow;
