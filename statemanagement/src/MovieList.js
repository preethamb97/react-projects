import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry potter',
      price: '10$',
      id: 12343
    },
    {
      name: 'Game of thrones',
      price: '10$',
      id: 232323
    },
    {
      name: 'Inception',
      price: '10$',
      id: 564545
    }
  ]);

  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} id={movie.id} />
      ))}
    </div>

  );
}

export default MovieList;