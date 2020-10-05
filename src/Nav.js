import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import  './Nav.css';
const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div >
      <h2>list of movies: {movies.length}</h2>
      <h2>movies</h2>
    </div>
  );
};
export default Nav;
