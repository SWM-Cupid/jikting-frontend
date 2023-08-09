import { unauthenticated } from './axiosInstance';

export const fetchUserNameCheck = async (username: string) => {
  const response = await unauthenticated
    .post('/members/username/check', { username })
    .then(() => true)
    .catch((error) => error.response.data.message);

  return response;
};

export const fetchNickNameCheck = async (nickname: string) => {
  const response = await unauthenticated
    .post('/members/nickname/check', { nickname })
    .then(() => true)
    .catch((error) => error.response.data.message);

  return response;
};

export const fetchSendCode = async (phone: string) => {
  try {
    await unauthenticated.post('/members/code', { phone });
    return true;
  } catch {
    return false;
  }
};

export const fetchVerificationCode = async (verificationCode: string) => {
  return await unauthenticated.post('/members/verification', { verificationCode });
};
