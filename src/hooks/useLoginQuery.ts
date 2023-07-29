import { fetchLogin } from 'api/login';
import { useMutation } from 'react-query';

export const useMutationLogin = () => {
  return useMutation(fetchLogin, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
