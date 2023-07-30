import { isAxiosError } from 'axios';
import { unauthenticated } from './axiosInstance';

export const fetchUserNameCheck = async (username: string) => {
  const response = await unauthenticated
    .post('/api/v1/members/username/check', { username })
    .then(() => true)
    .catch((error) => error.response.data.message);

  return response;
};

export const fetchNickNameCheck = async (nickname: string) => {
  const response = await unauthenticated
    .post('/api/v1/members/nickname/check', { nickname })
    .then(() => true)
    .catch((error) => error.response.data.message);

  return response;
};

export const fetchSendCode = async (phone: string) => {
  try {
    await unauthenticated.post('/api/v1/members/code', { phone });
    return true;
  } catch {
    return false;
  }
};
