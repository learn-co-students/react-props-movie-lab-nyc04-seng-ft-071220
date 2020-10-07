import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((singleMovie, index)=> 
     <MovieCard
          key={index}
        title={singleMovie.title}
      IMDBRating={singleMovie.IMDBRating}
         genres={singleMovie.genres}
         poster={singleMovie.poster}
      
  />)
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
