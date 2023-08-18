import { AxiosResponse } from 'axios';
import { authenticated } from './axiosInstance';

interface MyInfo {
  nickname: string;
  company: string;
  imageUrl: string;
}

export const fetchMyInfo = async () => {
  const response: AxiosResponse<MyInfo> = await authenticated.get('/members');
  return response;
};
