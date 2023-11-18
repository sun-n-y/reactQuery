import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';
import { toast } from 'react-toastify';

export const useFetchTasks = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/'),
  });
  return { isLoading, isError, data };
};

export const useCreateTask = () => {};

export const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) =>
      customFetch.patch(`/${taskId}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('task edited');
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { editTask };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: (taskId) => customFetch.delete(`/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('task deleted');
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { deleteTask, isLoading };
};
