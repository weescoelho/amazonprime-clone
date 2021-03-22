import "./App.css";
import Tmdb from "../services/Tmdb";
import React, { useEffect, useState } from "react";
import MovieRow from "../components/MovieRow";
import ExclusiveMovieRow from "../components/ExclusiveMovieRow";
import ContinueWatchRow from "../components/ContinueWatchRow";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [exclusiveMovies, setExclusiveMovies] = useState([]);
  const [watchingMovieList, setWatchingMovieList] = useState([]);

  useEffect(() => {
    async function loadList() {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
    loadList();
  }, []);

  useEffect(() => {
    async function loadList() {
      let list = await Tmdb.getMovieExclusive();
      setExclusiveMovies(list);
    }
    loadList();
  }, []);

  useEffect(() => {
    async function loadList() {
      let list = await Tmdb.getWatchingMovies();
      setWatchingMovieList(list);
      console.log(list);
    }
    loadList();
  }, [])

  return (
    <div className="container">
      <section className="movie-lists">
        { <div className="exclusive-movie-list">
          {exclusiveMovies.map((item) => (
            <ExclusiveMovieRow title={item.title} items={item.items} />
          ))}
        </div>}
        {<div className="continueWatch-list">
          {watchingMovieList.map((item) => (
            <ContinueWatchRow title={item.title} items={item.items}/>
          ))}
        </div>}
        <div>
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
