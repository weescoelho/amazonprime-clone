import "./App.css";
import Tmdb from "../services/Tmdb";
import React, { useEffect, useState } from "react";
import MovieRow from "../components/MovieRow";
import ExclusiveMovieRow from "../components/ExclusiveMovieRow";
import ContinueWatchRow from "../components/ContinueWatchRow";
import FeaturedMovie from "../components/FeaturedMovie";
import Header from "../components/Header";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [exclusiveMovies, setExclusiveMovies] = useState([]);
  const [watchingMovieList, setWatchingMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    async function loadList() {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      let listMovieExclusive = await Tmdb.getMovieExclusive();
      setExclusiveMovies(listMovieExclusive);
      let listWatchingMovies = await Tmdb.getWatchingMovies();
      setWatchingMovieList(listWatchingMovies);


       // Pegando o filme em destaque
       let originals = listMovieExclusive.filter((i) => i.slug === "originals");
       let randomChosen = Math.floor(
         Math.random() * (originals[0].items.results.length - 1),
       );
       let chosen = originals[0].items.results[randomChosen];
       let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
       setFeatureData(chosenInfo);

    }
    loadList();
  }, []);


  return (
    <>
    <Header/>
    <div>{featureData && <FeaturedMovie item={featureData}/>}</div>
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
    </>
  );
}

export default App;
