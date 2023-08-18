import { fetchMyInfo } from 'api/mypage';
import { useQuery } from 'react-query';

export const useQueryMyInfo = () => {
  return useQuery(['myInfo'], fetchMyInfo, {
    onSuccess: () => {
      console.log('성공');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
