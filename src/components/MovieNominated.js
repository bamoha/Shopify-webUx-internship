import React from "react";
import crossSVG from "../images/cross.svg";

const MovieNominated = ({ removeNominatedMovie, id }) => {


  return (
    <div className="m-2" style={{ position: "relative" }}>
      <img
        src={`https://img.omdbapi.com/?apikey=e1592641&i=${id}`}
        className="object-cover w-40 h-48 rounded"
        alt="movie poster"
      ></img>
      <img
        src={crossSVG}
        className="h-5 cursor-pointer"
        alt="close button"
        onClick={() => removeNominatedMovie(id)}
        style={{ position: "absolute", top: -7, right: -7 }}
      />
    </div>
  )
}

export default MovieNominated;
