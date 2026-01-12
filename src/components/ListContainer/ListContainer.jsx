import React from 'react';
import Card from '../Card/Card'; 
import styles from './ListContainer.module.css';
import { useFetchData } from '../Hooks/useFetchData'; 

const ListaContainer = ({ selectedGenre, onBackgroundChange }) => { 
  const { movies, isLoading, error } = useFetchData();

  if (isLoading) return <div className={styles.loadingState}>Cargando...</div>;
  if (error) return <div className={styles.errorState}>Error: {error.message}</div>;

  // Filtrado de Películas
  const normalize =(text ="") =>
    text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
  const filteredMovies = movies.filter( movie =>{
    if(selectedGenre === 'TODOS') return true;

    const movieGenre = normalize(movie.genre);
    const selected = normalize(selectedGenre);

    return movieGenre === selected;
  });
    return (
    <div className={styles.scrollContainer}> 
      <div className={styles.listGrid}> 
        {filteredMovies.map((movie, index) => (
          <Card 
            key={movie.id || index} 
            movie={movie} 
            onBackgroundChange={onBackgroundChange} 
          /> 
        ))}
      </div>
      
      {filteredMovies.length === 0 && (
        <div className={styles.noResults}>
          <p>
            No se encontraron películas de <strong>{selectedGenre}</strong>.
          </p>
        </div>
      )}
    </div>
  );
};

export default ListaContainer;
