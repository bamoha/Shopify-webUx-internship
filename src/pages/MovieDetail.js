import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovieDetails, nominateMovie } from "../store/actions";
import backSVG from "../images/back.svg";
import errorSVG from "../images/error.svg";
import ClipLoader from "react-spinners/ClipLoader";
import PageHead from "../components/PageHead";

const MovieDetail = ({ getMovieDetails, id, movieDetails, goBack, nominations }) => {

  useEffect(() => {
    getMovieDetails(id);
  }, [getMovieDetails, id]);

  const showContent = () => {
    if (movieDetails.loading)
      return (
        <div className="flex justify-center mt-32">
          <ClipLoader
            size={30}
            color={"#fff"}
            loading={movieDetails.loading}
          />
        </div>
      );

    if (movieDetails.err)
      return (
        <div className="flex flex-col justify-center mt-32">
          <img src={errorSVG} className="h-10" alt="Error" />
          <p className="text-center mt-3">Error!</p>
        </div>
      );

    return (
      <div className="mx-auto w-3/4 md:w-full">
        <div className="flex items-center mt-25">
          <img
            src={backSVG}
            alt="Go back"
            className="h-5 cursor-pointer my-5 mr-5"
            onClick={goBack}
          />
          <PageHead title={"S H O P P I E S"} />
        </div>

        <div className="flex items-center justify-center mt-10" aria-live="polite">
          <img
            src={`https://img.omdbapi.com/?apikey=e1592641&i=${id}`}
            alt="movie poster"
            width="300"
            height="348.65"
            className="img object-cover rounded"
          ></img>
        </div>

        <h3 className="font-bold text-3xl py-5">
          {movieDetails.data.Title}
        </h3>
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Plot
              </td>
              <td className="pb-3">{movieDetails.data.Plot}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Actors
              </td>
              <td className="pb-3">{movieDetails.data.Actors}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Awards
              </td>
              <td className="pb-3">{movieDetails.data.Awards}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Director
              </td>
              <td className="pb-3">{movieDetails.data.Director}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Genre
              </td>
              <td className="pb-3">{movieDetails.data.Genre}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Released
              </td>
              <td className="pb-3">{movieDetails.data.Released}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Rating
              </td>
              <td className="pb-3">
                {movieDetails.data.imdbRating}
              </td>
            </tr>
          </tbody>
        </table>
        {nominations.includes(id) ? (
          <button
            className="text-white mt-5 font-bold py-2 px-4 border-none rounded outline-none focus:outline-none focus:border-none opacity-50 cursor-not-allowed"
            style={{ backgroundColor: "#262630" }}
          >
            Already nominated
          </button>
        ) : (
            <button
              className="text-white mt-5 font-bold py-2 px-4 border-none rounded outline-none focus:outline-none focus:border-none"
              style={{ backgroundColor: "#0687ff" }}
              onClick={() => {
                nominateMovie(movieDetails.data.imdbID);
              }}
            >
              Nominate
          </button>
          )}
      </div>
    );
  };
  return (
    <div className="mt-5" style={{ flex: 2 }}>
      {showContent()}
    </div>
  );
}

const mapStateToProps = (state) => ({
  movieDetails: state.movieDetails,
  nominations: state.nominations.movies,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieDetails: (id) => dispatch(getMovieDetails(id)),
  nominateMovie: (id) => dispatch(nominateMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
