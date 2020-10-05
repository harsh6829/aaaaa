import React from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovies from "./AddMovies";

function App() {
  return (
    <MovieProvider>
      <div className="first">
        <AddMovies />
        ''
        <Nav className="navigation" />
        <MovieList className="clsnavigation" />
      </div>
    </MovieProvider>
  );
}

export default App;
