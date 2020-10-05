import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const AddMovies = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  let updateName = (e) => {
    setName(e.target.value);
  };
  let updatePrice = (e) => {
    setPrice(e.target.value);
  };
  let addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };
return (
  <div>
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} ></input>
      <input type="text" price="price" value={price} onChange={updatePrice} ></input>
      <button>submit</button>
    </form>
  </div>
);
}

export default AddMovies;
