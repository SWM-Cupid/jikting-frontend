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

export const fetchFindPasswordSendCode = async (userInfo: UserInfo) => {
  try {
    await unauthenticated.post('/members/password/reset/code', userInfo);
    return true;
  } catch {
    return false;
  }
};
