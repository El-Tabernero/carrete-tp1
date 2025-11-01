import React from 'react';
import Card from '../Card/Card';
import styles from './ListContainer.module.css';
import { carrete } from '../../data/peliculas'; 


const ListContainer = ({ selectedGenre, onBackgroundChange }) => {
  

  const filteredMovies = carrete.filter(pelicula => {
    if (selectedGenre === 'TODOS') {
      return true; 
    }

    return pelicula.generos.some(genero => 
      genero.toUpperCase() === selectedGenre
    );
  });
  
  return (
    <div className={styles.scrollContainer}> 
      <div className={styles.listGrid}> 
      
        {filteredMovies.map(pelicula => (
          <Card key={pelicula.id} 
          movie={pelicula} 
          onBackgroundChange={onBackgroundChange}
          /> 
        ))}
      </div>
      
      
      {filteredMovies.length === 0 && (
        <div className={styles.noResults}>
          No se encontraron películas para el género: {selectedGenre}
        </div>
      )}
      
    </div>
  );
};
export default ListContainer;