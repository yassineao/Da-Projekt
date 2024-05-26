import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Cover from './Cover';
import getToken from '../api/getTokenU';
import updateFavoriteFilm from '../api/updateFavoriteFilm';

function Card({ Type, movie, serie }) {
    const [isAdded, setIsAdded] = useState(false);
    const [userDataFetched, setUserDataFetched] = useState(false);
    
    let Id;
    if (movie !== null) {
        Id = movie.id;
    } else if (serie !== null) {
        Id = serie.id;
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!userDataFetched) {
                    const user = await getToken();
                    setUserDataFetched(true);

                    let numberExists = false;
                    if (movie !== null) {
                        numberExists = user.favoriteFilms.includes(movie.id);
                    } else if (serie !== null) {

                        numberExists = user.favoriteSeries.includes(serie.id);
                    }

                    setIsAdded(numberExists);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [userDataFetched, movie, serie]);

    const addToFavorites = async (e) => {
        try {
            e.preventDefault();
            const type = isAdded ? 'pull' : 'addToSet';
            const response = await updateFavoriteFilm(type, Id, Type);

            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('session', data.token);
                setIsAdded(!isAdded);
            } else {
                
                const errorData = await response.json();
                console.error('Failed to update favorite films:', errorData.message);
            }
        } catch (error) {
            console.error('Error updating favorite films:', error);
        }
    };

    return (
        <div>
          <Link to={"/test?id=" + Id+"&Type="+Type}>

                <div className="card">
                    <div className="movie_card" id="bright" >
                        <div className="info_section">
                            <div className="movie_header">
                                {Type === 'movie' ? (  <Cover Type="movie" Id={movie.id} number={3} />  ) : ( <Cover Type="tv" Id={serie.id} number={1} />)}
                                {Type === 'movie' ? (  <h1>{movie.title}</h1>) : ( <h1>{serie.name}</h1> )}
                                {sessionStorage.getItem('session') === null ? ( <h1>{userDataFetched}</h1>) : ( 
                                <button className="smallButton" onClick={addToFavorites}>
                                    {isAdded ? 'Remove from Favorites' : 'Add to Favorites'}
                                </button> )}
                                
                                {Type === 'movie' ? (   <span className="minutes">{movie.vote_average}</span>) : (  <span className="minutes">222 </span>)}
                                {Type === 'movie' ? (  <p className="type">{movie.release_date}, {movie.original_language}</p> ) : (  <p className="type">{serie.first_air_date}</p>)}

                            </div>
                            <div className="movie_desc">
                                
                                {Type === 'movie' ? (  <p className="text">{movie.overview}</p>) : (  <p className="text">{serie.overview}</p>)}

                            </div>
                        </div>
                        {Type === 'movie' ? (  <div className="blur_back"><Cover Type="movie" Id={movie.id} number={1} /></div>) : (  <div className="blur_back">
                        <Cover Type="tv" Id={serie.id} number={2} />
                    </div>)}
                    </div>
                </div>
                </Link>
           
        </div>
    );
}

export default Card;
