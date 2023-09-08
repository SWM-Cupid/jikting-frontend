import { UserInfo } from 'pages/SignUp';
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
    await unauthenticated.post('/members/code', { phone: phone });
    return true;
  } catch {
    return false;
  }
};

export const fetchVerificationCode = async (phone: string, verificationCode: string) => {
  return await unauthenticated.post('/members/verification', { phone, verificationCode });
};

export const fetchSignup = async (userInfo: UserInfo) => {
  const { userId, userPassword, userNickName, userName, userPhoneNumber, userGender } = userInfo;
  return await unauthenticated.post('members', {
    username: userId,
    password: userPassword,
    nickname: userNickName,
    name: userName,
    phone: userPhoneNumber,
    gender: userGender,
  });
};
