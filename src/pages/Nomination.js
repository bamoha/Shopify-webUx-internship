import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";
import {
  getIDSfromQuery,
  setQueryStringWithoutPageReload,
} from "../common/queryStrings";
import { nominateMovie } from "../store/actions";

const Nomination = ({ categoryState, nominateMovie, movies }) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const values = getIDSfromQuery("movies");
    setQueryStringWithoutPageReload("?");
    values.map((id) => nominateMovie(id));
  }, [nominateMovie])

  const copyURLtoClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(true)
    }, 2000);
  };


  return (
    <div className={`flex-1 flex flex-col p-5 ${categoryState.style}`}>
      <button
        className="primary-nominated-btn py-2 px-4 self-end"
        onClick={copyURLtoClipboard}
      >
        {copied ? "Copied!" : "Share"}
      </button>
      <h1 className="block text-2xl font-semibold">Nominations</h1>
      <div className="flex justify-center flex-wrap">
        {movies.map((movie, index) => (
          <div key={index} className="flex mt-5">
            <Movie id={movie} num={index + 1} />
          </div>
        ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.nominations.movies,
});

const mapDispatchToProps = (dispatch) => ({
  nominateMovie: (id) => dispatch(nominateMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nomination);
