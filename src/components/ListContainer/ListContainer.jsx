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



/*
import React from 'react';
import Card from '../Card/Card';
import styles from './ListContainer.module.css';
import { useFetchData } from '../Hooks/useFetchData'; // ⬅️ USAMOS EL HOOK DE REACT QUERY

const ListContainer = ({ selectedGenre, onBackgroundChange }) => { 
  const { movies, isLoading, error } = useFetchData();

  if (isLoading) {
    return <div className={styles.loadingState}>Cargando películas...</div>;
  }
  if (error) {
    return <div className={styles.errorState}>Error al cargar los datos: {error.message}. Verifica el servicio de la API.</div>;
  }

 
  const movieList = Array.isArray(movies) ? movies : (movies?.results || []); 


  const filteredMovies = movieList.filter(pelicula => {

    if (selectedGenre === 'TODOS') {
      return true; 
    }
    
    const generosAPI = pelicula.genre_ids || []; 
    if (!generosAPI.includes(selectedGenre)) { 
        return false;
    }
    return true;
  });

  if (filteredMovies.length === 0) {
    return (
      <div className={styles.noResults}>
        No se encontraron películas para el género: {selectedGenre}.
      </div>
    );
  }

  return (
    <div className={styles.scrollContainer}> 
      <div className={styles.listGrid}> 
      
        {filteredMovies.map((pelicula, index) => (
          <Card 
            key={index} // Usamos index como fallback si la API no tiene 'id'
            movie={pelicula} 
            onBackgroundChange={onBackgroundChange} // ⬅️ ¡ESTO RESUELVE EL ERROR!
          /> 
        ))}
      </div>
    </div>
  );
};
export default ListContainer; */