const API_KEY = "bdac54c3059d0228f7a818831e18a5e4";

const requests ={
     fetchTrending: `/trending/al/week?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
     fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_geners=28`,
     fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_geners=35`,
     fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_geners=27`,
     fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_geners=10749`,
     fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_geners=100`,
}

export default requests;