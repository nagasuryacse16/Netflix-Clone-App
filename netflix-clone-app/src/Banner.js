import React, {useEffect, useState} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css'

function Banner() {

    const [movie, setMovie] = useState( [] ); //hook

    //snippet of code which runs based on the specific condition
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                (request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]));
            return request;
        }
        fetchData(); //if [], run once when the row loads and dont run again.
    }, []);

    function truncate(str, maxLength){
        return str?.length > maxLength ? str.substr(0,maxLength-1) + "..." : str;
    }

    return (
        <header
            className='banner'
            style={{
                backgroundSize : "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
                <div className='banner__contents'>
                    <h1 className='banner__title'>
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1> 
                    
                    <div className='banner__buttons'>  
                        <button className='banner__button'>Play</button>
                        <button className='banner__button'>My List</button>
                    </div>

                    <h1 className='banner__description'>
                        {truncate(movie?.overview, 150)}
                    </h1>    
                </div>
                <div className='banner__fadeBottom' />
        </header>    
      );
}

export default Banner;