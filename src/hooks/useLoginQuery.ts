import { fetchLogin } from 'api/login';
import { useMutation } from 'react-query';

export const useMutationLogin = () => {
  return useMutation(fetchLogin, {
    onSuccess: () => {
      console.log('로그인 성공');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
