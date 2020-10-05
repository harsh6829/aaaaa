import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, SetMovies] = useState([
    {
      name: "intersteller",
      price: 30,
      rating: 8,
      id: 1,
    },
    {
      name: "inception",
      price: 20,
      rating: 7,
      id: 2,
    },
    {
      name: "the green book",
      price: 50,
      rating: 9,
      id: 3,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, SetMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
