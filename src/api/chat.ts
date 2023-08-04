import { authenticated } from './axiosInstance';

export const fetchChatList = async () => {
  const response = authenticated.get('/api/v1/chattings/rooms');
  return response;
};
