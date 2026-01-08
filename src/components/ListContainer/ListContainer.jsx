import React from 'react';
import Card from '../Card/Card'; 
import styles from './ListContainer.module.css';
import { useFetchData } from '../Hooks/useFetchData'; 

const ListaContainer = ({ selectedGenre, onBackgroundChange }) => { 
  const { movies, isLoading, error } = useFetchData();

  if (isLoading) return <div className={styles.loadingState}>Cargando...</div>;
  if (error) return <div className={styles.errorState}>Error: {error.message}</div>;

  // --- NUEVO: filtrado universal compatible con la API ---
  const filteredMovies = movies.filter(movie => {
    if (selectedGenre === 'TODOS') return true;

    if (!movie.genre) return false;

    // API → "Action, Drama"
    const genres = movie.genre
      .split(',')
      .map(g => g.trim().toUpperCase());

    // selectedGenre → "DRAMA" o "ACCION"
    return genres.includes(selectedGenre);
  });

  return (
    <div className={styles.scrollContainer}> 
      <div className={styles.listGrid}> 
        {filteredMovies.map((movie, index) => (
          <Card 
            key={movie.imdbId || index} 
            movie={movie} 
            onBackgroundChange={onBackgroundChange} 
          /> 
        ))}
      </div>
      
      {filteredMovies.length === 0 && (
        <div className={styles.noResults}>
          <p>No se encontraron películas de <strong>{selectedGenre}</strong>.</p>
        </div>
      )}
    </div>
  );
};

export default ListaContainer;

/*
import React from 'react';
import Card from '../Card/Card'; 
import styles from './ListContainer.module.css';
import { useFetchData } from '../Hooks/useFetchData'; 

const ListaContainer = ({ selectedGenre, onBackgroundChange }) => { 
  const { movies, isLoading, error } = useFetchData();

  if (isLoading) return <div className={styles.loadingState}>Cargando...</div>;
  if (error) return <div className={styles.errorState}>Error: {error.message}</div>;

  // Filtrado de Películas
  const filteredMovies = movies.filter(movie => {
    if (selectedGenre === 'TODOS') return true;
    
    const apiGenres = movie.genre ? movie.genre.toLowerCase() : '';
    
    const filter = selectedGenre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    
    if (filter.includes('accion') && apiGenres.includes('action')) return true;
    if (filter.includes('aventura') && apiGenres.includes('adventure')) return true;
    if (filter.includes('animacion') && apiGenres.includes('animation')) return true;
    
    // Ciencia Ficción -> Sci-Fi
    if ((filter.includes('ciencia') || filter.includes('ficcion')) && apiGenres.includes('sci-fi')) return true;
    
    if (filter.includes('drama') && apiGenres.includes('drama')) return true;
    if (filter.includes('comedia') && apiGenres.includes('comedy')) return true;
    if (filter.includes('fantasia') && apiGenres.includes('fantasy')) return true;
    if (filter.includes('terror') && (apiGenres.includes('horror') || apiGenres.includes('thriller'))) return true;
    
    // Infantil -> Family o Animation
    if (filter.includes('infantil') && (apiGenres.includes('family') || apiGenres.includes('animation'))) return true;

    // Búsqueda por defecto (para géneros que coinciden directamente como 'Western')
    return apiGenres.includes(filter);
  });

  return (
    <div className={styles.scrollContainer}> 
      <div className={styles.listGrid}> 
        {filteredMovies.map((movie, index) => (
          <Card 
            key={movie.imdbID || index} 
            movie={movie} 
            onBackgroundChange={onBackgroundChange} 
          /> 
        ))}
      </div>
      
      {filteredMovies.length === 0 && (
         <div className={styles.noResults}>
           <p>No se encontraron películas de <strong>{selectedGenre}</strong> en esta lista.</p>
         </div>
      )}
    </div>
  );
};

export default ListaContainer;
*/