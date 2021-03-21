import React from "react";
import TimeBar from "../TimeBar";
import "./styles.css";

const ContinueWatchRow = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="watchingRow-area">
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <div class="watchingRow-item" key={key}>
              <img
                src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
                alt={item.original_title}
              />
              <TimeBar/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContinueWatchRow;
