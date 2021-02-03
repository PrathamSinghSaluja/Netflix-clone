import React, { Component } from 'react'
import './Movie.css'
import Nav from './Nav';
import Row from './Row';
import requests from './request';

function Movie() {
    // const movie = props.Row.state;
    // console.log(movie);
        return (
        <div className="movie">
            <Nav />
            <Row

            />
            <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                        'https://miro.medium.com/max/5200/1*FlVcGpVAvaa9VtndGA4YsQ.jpeg'
                        )`,
                    backgroundPosition:'center',
                }}
            >
            </header>
            <div className="movie-title result">
                <h1>Helooo</h1>
            </div>
            <div className="movie-description">
            After a brutal virus wipes out most of the population, two young siblings embark on a perilous
            search for safety. A Scandinavian thriller series.
            </div>
<br/>
            <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
            </div>

<br/>       
            
            <Row
            title="Recommended Movies" 
            fetchUrl={requests.fetchTrending}
            isLargeRow
            />
            <Row
            title="Netflix Originals" 
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
        </div>
    );
}


export default Movie;
