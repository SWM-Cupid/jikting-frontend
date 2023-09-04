import { fetchMyInfo } from 'api/mypage';
import { useQuery } from 'react-query';

export const useQueryMyInfo = () => {
  const { data } = useQuery(['myInfo'], fetchMyInfo);
  return data?.data;
};
