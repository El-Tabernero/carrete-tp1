import React from 'react';
import styles from './Card.module.css//'

const Card = ({ movie, onBackgroundChange }) => {
  const handleMouseEnter = () => {
    onBackgroundChange(movie.portada169);
  };
  const handleMouseLeave = () => {
    onBackgroundChange(null);
  };

  
  return (
    <div 
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <img src={movie.img} alt={`Poster de ${movie.title}`} className={styles.poster} />
      
      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title} ({movie.año})</h3>
        
        
        <p className={styles.generos}>
          
          {movie.generos.map((genero, index) => (
           
            <span key={index} className={styles.genreTag}>
              {genero}
              
              {index < movie.generos.length - 1 ? ' | ' : ''}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
export default Card;