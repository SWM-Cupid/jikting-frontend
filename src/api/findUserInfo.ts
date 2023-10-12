import { UserInfo } from 'pages/FindUserIdPassword/AuthUser';
import { unauthenticated } from './axiosInstance';

export const fetchFindIdSendCode = async (userInfo: UserInfo) => {
  try {
    await unauthenticated.post('/members/username/search/code', userInfo);
    return true;
  } catch {
    return false;
  }
};

export const fetchFindIdVerificationCode = async (phone: string, verificationCode: string) => {
  try {
    return (await unauthenticated.post('/members/username/search/verification', { phone, verificationCode })).data
      .username;
  } catch {
    return false;
  }
};

export const fetchFindPasswordSendCode = async (userInfo: UserInfo) => {
  try {
    await unauthenticated.post('/members/password/reset/code', userInfo);
    return true;
  } catch {
    return false;
  }
};

export const fetchFindPasswordVerificationCode = async (phone: string, verificationCode: string) => {
  try {
    await unauthenticated.post('/members/password/reset/verification', { phone, verificationCode });
    return true;
  } catch {
    return false;
  }
};

export const fetchResetPassword = async (username: string, password: string) => {
  return await unauthenticated.patch('/members/password/reset', {
    username,
    password,
  });
};
