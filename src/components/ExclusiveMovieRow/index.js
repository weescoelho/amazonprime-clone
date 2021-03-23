import React, { useState } from "react";
import "./styles.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const ExclusiveMovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 300;
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  };
  return (
    <div className="exclusiveMovieRow">
      <h2>{title} <span class="more-link"><a href="#">Ver mais</a> </span></h2>
      <div className="exclusiveMovieRow-area">
        <div className="exclusiveMovieRow--left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="exclusiveMovieRow--right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>
        <div
          className="exclusiveMovieRow-list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 300,
          }}
        >
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
    </div>
  );
};

export default ExclusiveMovieRow;
