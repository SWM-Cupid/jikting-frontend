import { fetchMyInfo, fetchMyProfileInfo } from 'api/mypage';
import { useQuery } from 'react-query';

export const useQueryMyInfo = () => {
  const { data } = useQuery(['myInfo'], fetchMyInfo);
  return data?.data;
};

export const useQueryMyProfileInfo = () => {
  const { data } = useQuery(['myProfileInfo'], fetchMyProfileInfo);
  return data?.data;
};
