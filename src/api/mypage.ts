import { AxiosResponse } from 'axios';
import { authenticated } from './axiosInstance';
import { SubmitData } from 'pages/EditPassword';

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

export const fetchEditNickName = async (data: { nickname: string }) => {
  return await authenticated.patch('/members', data);
};

export const fetchEditPassword = async (data: SubmitData) => {
  return await authenticated.patch('/members/password', data);
};
