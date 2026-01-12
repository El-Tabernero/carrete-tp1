import { useQuery } from '@tanstack/react-query';
import { fetchCommentsByMovie } from '../utils/api';

export function useComments(movieId) {
  return useQuery({
    queryKey: ['comments', movieId],
    queryFn: () => fetchCommentsByMovie(movieId),
    enabled: !!movieId
  });
}