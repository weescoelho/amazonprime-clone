import React from 'react'
import './styles.css'

const FeaturedMovie = ({item}) => {
  
  let description = item.overview;
  if(description.length > 200){
    description = description.substring(0,200) + '...'
  }
console.log(item)

  return (
    <section className="featured" style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
    }}>
      <div className="featured-vertical" >
        <div className="featured-horizontal">
          <div className="featured-content-container">
          <div className="featured-header">
            <div className="x-ray-support" style={{marginRight:'10px'}}>X-RAY</div>
            <div className="featured-imdb">IMDB</div>
          </div>
          <h2 className="featured-title">{item.name}</h2>
          <p className="featured-description">{description}</p>
          <p className="featured-duration">Duração: {item.episode_run_time[0]} min.</p>
          <div>
            <a href="#" className="watch-button">► Assistir</a>
            <a href="#" className="add-favoriteList-button">+</a>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie
