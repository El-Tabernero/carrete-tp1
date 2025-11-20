import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/api'; 

// Renombramos la función exportada a 'useFetch'
export function useFetchData() {
  
  const { 
    data: moviesData, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['movies', 'custom-api'],
    queryFn: fetchData, 
    staleTime: 10 * 60 * 1000, 
    retry: 3, 
  });

  // Aseguramos que sea un array
  const movies = Array.isArray(moviesData) ? moviesData : [];

  return { movies, isLoading, error };
}

/**
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/api'; // Importamos la función fetch

// RENOMBRADO: El hook se llama useFetchData (coincidiendo con el archivo)
export function useFetchData() {
  // La clave 'imdb-movies' asegura el caching.
  const { 
    data: movies, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['movies', 'imdb-list'],
    // Llama a fetchData que ahora usa el endpoint de search
    queryFn: () => fetchData(), 
    staleTime: 10 * 60 * 1000, // 10 minutos
    retry: 3, 
  });

  // movies será la respuesta JSON completa de la API. 
  return { movies, isLoading, error };
}
*/
