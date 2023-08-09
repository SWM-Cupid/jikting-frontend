import { authenticated } from './axiosInstance';

export const fetchChatList = async () => {
  const response = await authenticated.get('/chattings/rooms');
  return response;
};

export const fetchChatRoom = async (chattingRoomId: number) => {
  const response = await authenticated.get(`/chattings/rooms/${chattingRoomId}`);
  return response;
};
