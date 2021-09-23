import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
    <MovieContext.Provider value={[movies]}>
      {props.children}
    </MovieContext.Provider>
  );
};