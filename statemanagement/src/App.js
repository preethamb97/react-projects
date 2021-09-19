import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;
