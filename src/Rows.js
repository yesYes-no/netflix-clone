import React, { useState,useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }){
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //a snippet of code which runs based on specific condition
    useEffect(()=>{
        // if [], run once when the row loads, and dont run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    console.table(movies);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
           
           autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        if (trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.title || movie?.name || movie?.source)
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }

    }

    return(
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
              

                {movies.map(movie => (
                 <img 
                 key={movie.id}
                 onClick={() => handleClick(movie)}
                 className={`row_poster ${isLargeRow && "row__posterLarge"}`}
                 src={`${baseurl}${movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>

            {/* container-> posters */}
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )

}

export default Row;