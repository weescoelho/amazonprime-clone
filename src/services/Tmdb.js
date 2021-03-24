const API_KEY = "c393333054f3bd5f8f2d8a1ef533a9a8";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const request = await fetch(`${API_BASE}${endpoint}`);
  const json = request.json();
  return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: "toprated",
        title: "Mais Assistidos",
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
      },
    ]
  },
  getMovieExclusive: async () => {
    return [
      {
        slug: "originals",
        title: "Originais Amazon e Exclusivos",
        items: await basicFetch(`/discover/tv?with_network=1024&language=pt-BR&api_key=${API_KEY}`),
      },
    ]
  },
  getWatchingMovies: async () => {
    return [
      {
        slug: "watching",
        title: "Continue assistindo",
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
      },
    ]
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if(movieId){
      // eslint-disable-next-line default-case
      switch(type){
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
          break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
          break;
      }
    }

    return info;
  }
}