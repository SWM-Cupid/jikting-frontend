import { AxiosResponse } from 'axios';
import { authenticated } from './axiosInstance';

interface MyInfo {
  nickname: string;
  company: string;
  imageUrl: string;
}
interface Images {
  url: string;
  sequence: string;
}

interface MyProfileInfo {
  birth: string;
  height: number;
  gender: string;
  address: string;
  mbti: string;
  smokeStatus: string;
  drinkStatus: string;
  college: string;
  personalities: string[];
  hobbies: string[];
  description: string;
  images: Images[];
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

export const fetchMyProfileInfo = async () => {
  const response: AxiosResponse<MyProfileInfo> = await authenticated.get('/members/profile');
  return response;
};
