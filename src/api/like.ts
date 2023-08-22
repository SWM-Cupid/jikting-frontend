import { AxiosResponse } from 'axios';
import { authenticated } from './axiosInstance';

interface Like {
  likeId: number;
  name: string;
  description: string;
  keywords: string[];
  imageUrls: string[];
}

export const fetchGetLikeList = async () => {
  const response: AxiosResponse<Like[]> = await authenticated.get('/likes/received');
  return response;
};

export const fetchSendLikeList = async () => {
  const response: AxiosResponse<Like[]> = await authenticated.get('/likes/sent');
  return response;
};

export const fetchAcceptLike = async (likeId: number) => {
  return await authenticated.post(`/likes/${likeId}/accept`);
};

export const fetchRejectLike = async (likeId: number) => {
  return await authenticated.post(`/likes/${likeId}/reject`);
};
