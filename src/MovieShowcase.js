import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

// console.log(MovieCard)
export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // console.log(movieData)
    return movieData.map((movie) => <MovieCard
    title = {movie.title}
    IMDBRating = {movie.IMDBRating} 
    genres = {movie.genres}
    poster = {movie.poster}
    />
    
   )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(MovieCard)}
      </div>
      
    )
  }
}
