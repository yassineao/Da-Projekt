import React, { useState, useEffect } from 'react';
import "../styles/style.css"
import { getPoster } from '../api/getPoster';

function Cover({ Type, Id ,number,classN,PB}) {
  const [cover, setCover] = useState([]);
if (classN===undefined){
  classN= "locandina"
}
  const fetchCover = async () => {
    try {
      const data1 = await getPoster(Type, Id);
      if (data1.posters && data1.posters.length > 0) {
        
        if (PB===undefined){
          setCover(data1.posters[number]);
        }
        else
        setCover(data1.backdrops[number]);
      } else {
        console.error('No poster found for this movie.');
      }
    } catch (error) {
      console.error('Error fetching poster:', error);
    }
  };

  useEffect(() => {
    fetchCover();
  }, [Type, Id]); // Depend on Type and Id instead of fetchCover

  return (
    <div>
  {cover && cover.file_path ? (
    <img className={classN} src={`https://image.tmdb.org/t/p/w500${cover.file_path}`} alt="Cover" />
  ) : (
      <div/>
)}
</div>
  );
}

export default Cover;
