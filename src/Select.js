import React, { Component } from 'react'
import './Select.css'
import requests from './request'

function Select(props) {

    const movie = `${props.cinema}`;
    console.log(movie);
    return (
        <div>
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

        </div>
    )
}


export default Select
