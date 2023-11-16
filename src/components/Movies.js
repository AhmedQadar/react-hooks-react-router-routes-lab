import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
  {/*{code here}*/}
  <h1>Movies Page</h1>
  {movies.map((movie) => (
    <div key={movie.title}>
      {/* movie's title */}
      <h2>{movie.title}</h2>
  
      {/* movie's time */}
      <p>Time: {movie.time}</p>
  
      {/* list of genres */}
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  ))}
  </div>;
}

export default Movies;
