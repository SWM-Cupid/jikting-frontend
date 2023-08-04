import { fetchChatList } from 'api/chat';
import { useQuery } from 'react-query';

export const useChatListQuery = () => {
  return useQuery(['chatlist'], fetchChatList, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
