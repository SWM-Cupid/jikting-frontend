import { unauthenticated } from './axiosInstance';

export const fetchUserNameCheck = async (input: string) => {
  const response = await unauthenticated
    .post('/api/v1/members/username/check', input)
    .then(() => true)
    .catch((error) => error.response.data.message);

  return response;
};
