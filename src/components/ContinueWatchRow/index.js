import React, { useState } from "react";
import TimeBar from "../TimeBar";
import "./styles.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const ContinueWatchRow = ({ title, items }) => {
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
    let listWidth = items.results.length * 310;
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  };
  
  return (
    <div className="watchingRow">
      <h2>{title}</h2>
      <div className="watchingRow-area">
        <div className="watchingRow--left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="watchingRow--right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>
        <div
          className="watchingRow-list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 310,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div class="watchingRow-item" key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
                  alt={item.original_title}
                />
                <TimeBar />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContinueWatchRow;
