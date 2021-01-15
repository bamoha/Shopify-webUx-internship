import React from "react";
import plusSVG from "../images/plus.svg";
import minusSVG from "../images/minus.svg";

const MovieText = ({
    data,
    showDetails,
    nominateMovie,
    alreadyNominated,
    removeNominatedMovie,
}) => {
    return (
        <div className="mb-1 flex py-3 px-5 movie-text" aria-live="polite">
            <div className="mr-4 w-16">
                <img
                    src={data.Poster}
                    alt="Poster"
                    className="home-poster rounded"
                />
            </div>
            <div className="flex w-full justify-between">
                <div className="text-left">
                    <h2 className="text-xl cursor-pointer font-bold" onClick={showDetails}>{data.Title}</h2>
                    <span className="text-xs" style={{ color: "#b5bbc9", fontStyle: "italic" }}>({data.Year})</span>
                </div>
                <div className="flex items-center justify-end w-16">
                    {alreadyNominated ? (
                        <img
                            src={minusSVG}
                            alt="Delete movie"
                            className="h-6 cursor-pointer"
                            onClick={() => removeNominatedMovie(data.imdbID)}
                        />
                    ) : (
                            <img
                                src={plusSVG}
                                alt="Add movie"
                                className="h-6 cursor-pointer"
                                onClick={() => nominateMovie(data.imdbID)}
                            />
                        )}
                </div>
            </div>
        </div>
    );
}

export default MovieText;
