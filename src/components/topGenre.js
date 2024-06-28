import React from 'react';
import Cover from './Cover';
import "../styles/CardM.css"

const TopGenre = ({ showPopup, handleTogglePopup, films, bgColor }) => (
  <>
   
    <div className="column1">
      {showPopup && (
        <div id="popup-card">
          <div className="overlay show" onClick={handleTogglePopup}></div>
          <div className="cardd">
            <div className="titlebar" style={{ backgroundColor: bgColor }}>
              <span className="buttons">
                <button className="minimize">
                  <svg x="0px" y="0px" viewBox="0 0 10.2 1"><rect x="0" y="50%" width="10.2" height="1"></rect></svg>
                </button>
                <button className="maximize">
                  <svg viewBox="0 0 10 10"><path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path></svg>
                </button>
                <button className="close" onClick={handleTogglePopup}>
                  <svg viewBox="0 0 10 10"><polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"></polygon></svg>
                </button>
              </span>
            </div>
            <div >
              <div >
                
                {films.map((film) => (
                  
                  <div key={film.id}>
                     <style>
                {`
                .cardM  {
                    background-size: cover;
                    content: "";
                    display: block;
                    height: 300px;
                }

             
                `}
            </style>
            <div className="cardM" style={{ backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),url('https://image.tmdb.org/t/p/original${film.backdrop_path || film.poster_path}')` }}>


                      <div class="img"> <Cover Type="movie" Id={film.id} number={1} classN="img" /></div>
                      <span>{film.title}</span>
                      <p class="info">{film.overview}</p>
                      <div class="share">
                      
                      </div>
                    </div>
                  </div>
                  
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
);

export default TopGenre;
