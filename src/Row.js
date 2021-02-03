import React, { useState, useEffect, Component } from 'react';
import "./Row.css";
import instance from './axios';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
import { Link, Route } from 'react-router-dom';
import Movie from './Movie';

const base_url = "https://image.tmdb.org/t/p/original";


function Row  ({ title, fetchUrl, isLargeRow}) {

   const[movies, setMovies] = useState([]);
//    const[trailerUrl, setTrailerUrl] = useState("");
   useEffect(() => {
       async function fetchData() {
           const request = await instance.get(fetchUrl);
           setMovies(request.data.results);
           return request;
       }
       fetchData();
   }, [fetchUrl]);

   const opts = {
       height: "390",
       width: "100%",
       playerVars: {
            autoplay: 1        
        },
   };


//     function handleClick(movie){
//        if(trailerUrl){
//            setTrailerUrl("")
//        } 
//     //    Important Parttt
//        else{
//            movieTrailer(movie?.name || "")
//            .then(url => {
//             const urlParams = new URLSearchParams(new URL(url).search);
//             setTrailerUrl(urlParams.get("v"));
//            })
//            .catch((error) => console.log(error))
//        };
//    };

    const [pic, setPic] = useState()
//    function pass(movie){
//        setPic(movie);
//    }


    return(
        <div className='row'>
            <h1>{title}</h1>
            <Link to={{
                    pathname: `/Movie/`,
                    state: pic,
                }}>
                
            <div className="row-posters">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    onClick={() => setPic(movie)}
                    />
                ))}
            </div>
        
            </Link>
            

            {/* {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts} />} */}

        </div>
    );

}
export default Row;


// export const Row = () => {

   
//   return (
//     <>
//       <HomePageHeader />
//       <div className="movie-container">
//         {movies.map((data, key) => {
//           return (
//             <div key={key}>
//               <Movie
//                 key={key}
//                 title={data.title}
//                 genres={data.genres}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// const HomePageHeader = () => {
//   return (
//     <header className="header">
//       <h2>Movies</h2>
//     </header>
//   );
// };

// const Movie = ({ title, genres }) => {
//   if (!title) return <div />;
//   return (
//     <table>
//       <tbody>
//         <tr>
//           <td>
//             <h5>{title}</h5>
//           </td>
//           <td>
//             <h5>{genres}</h5>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };
