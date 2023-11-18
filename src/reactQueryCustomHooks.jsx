import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';

export const useFetchTasks = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/'),
  });
  return { isLoading, isError, data };
};

export const useCreateTasks = () => {};
export const useEditTasks = () => {};
export const useDeleteTasks = () => {};
