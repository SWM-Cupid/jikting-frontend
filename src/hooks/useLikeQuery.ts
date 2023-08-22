import { fetchGetLikeList, fetchSendLikeList } from 'api/like';
import { useQuery } from 'react-query';

export const useGetLikeListQuery = (selected: string) => {
  const { data } = useQuery(['getLike'], fetchGetLikeList, { enabled: selected === 'get' });
  return data?.data;
};

export const useSendLikeListQuery = (selected: string) => {
  const { data } = useQuery(['sendLike'], fetchSendLikeList, { enabled: selected === 'send' });
  return data?.data;
};
