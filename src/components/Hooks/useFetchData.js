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

