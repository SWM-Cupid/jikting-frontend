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

export const fetchEditProfile = async (data: FormData) => {
  await authenticated.post('/members/profile', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
