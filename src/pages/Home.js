import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchMovies, removeNominatedMovie } from "../store/actions";
import MovieDetail from "./MovieDetail";
import Nomination from "./Nomination";
import { nominateMovie } from "../store/actions";
import searchSVG from "../images/search.svg";
import errorSVG from "../images/error.svg";
import nodata from "../images/nodata.svg";
import ClipLoader from "react-spinners/ClipLoader";
import PageHead from "../components/PageHead";
import MovieCard from "../components/MovieCard";


const Home = ({ removeNominatedMovie, nominateMovie, nominations, movies, fetchMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [id, setId] = useState(null);
  const [categoryState, setCategoryState] = useState({
    menuStatus: 'close',
    style: 'category-list',
    overlayStyle: 'category-list-background',
  });

  const switchCategory = state => {
    switch (state) {
      case 'close':
        setCategoryState({
          menuStatus: 'open',
          style: 'category-list active',
          overlayStyle: 'category-list-background active',
        });
        break;
      case 'open':
      default:
        setCategoryState({
          menuStatus: 'close',
          style: 'category-list',
          overlayStyle: 'category-list-background',
        });
    }
  };

  const showContent = () => {
    if (movies.loading)
      return (
        <div className="flex justify-center mt-10">
          <ClipLoader
            size={30}
            color={"#5C5A5B"}
            loading={movies.loading}
          />
        </div>
      );

    if (movies.err)
      return (
        <div className="flex flex-col justify-center mt-10">
          <img src={errorSVG} className="h-10" alt="Error" />

          <p className="text-center mt-3">{movies.err.message}</p>
        </div>
      );

    if (movies.data.length === 0)
      return (
        <div className="flex flex-col justify-center mt-10">
          <img src={nodata} className="h-25" alt="Error" />

          <p className="text-center mt-3">Start by Typing in the name of a movie you would like to nominate.</p>
        </div>
      );

    return (
      <div className="mt-5 mx-auto">
        {movies.data.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            data={movie}
            showDetails={() => {
              setId(movie.imdbID)
              setShowDetails(true)
            }
            }
            alreadyNominated={nominations.includes(movie.imdbID)}
            removeNominatedMovie={removeNominatedMovie}
            nominateMovie={(id) => nominateMovie(id)}
          />
        ))}
      </div>
    );
  };
  return (
    <>
      {showDetails ? (
        <MovieDetail
          id={id}
          goBack={() => {
            setId(null)
            setShowDetails(false)
          }}
        />) : (
          <div style={{ flex: 2 }}>
            <div
              onClick={() => switchCategory(categoryState.menuStatus)}
              className={categoryState.overlayStyle}
            ></div>
            <div className="md:w-1/2 sm:w-3/4 mt-5 mx-auto text-center">
              <PageHead title={"S H O P P I E S"} />
              <p className="block page-title-text">We help you save your favourite films you feel should be up for nomination.</p>
              <div className="flex justify-end mt-5">
                <button
                  className="primary-nominated-btn showMobile py-2 px-4 self-end"
                  onClick={() => { switchCategory(categoryState.menuStatus) }}
                >
                  Nominated({nominations.length})
                </button>
              </div>
              <div
                className="w-full mt-10 rounded py-3 px-5 flex rounded-full items-center search-bar-body"
              >
                <img src={searchSVG} className="h-4" alt="Search" />
                <input
                  autoFocus={true}
                  className="border-none bg-transparent ml-5 flex-1 text-base text-current outline-none"
                  value={searchTerm}
                  onChange={(e) => {
                    fetchMovies(e.target.value)
                    setSearchTerm(e.target.value)
                  }}
                  placeholder="Search Movies"
                />
              </div>
              {showContent()}
            </div>
          </div>)}
      <Nomination categoryState={categoryState} />
    </>
  );
}

const mapStateToProps = (state) => ({
  movies: state.fetchMovies,
  nominations: state.nominations.movies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (searchTerm) => dispatch(fetchMovies(searchTerm)),
  nominateMovie: (id) => dispatch(nominateMovie(id)),
  removeNominatedMovie: (id) => dispatch(removeNominatedMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
