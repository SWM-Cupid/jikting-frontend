import { unauthenticated } from './axiosInstance';

interface Props {
  username: string;
  password: string;
}

export const fetchLogin = async ({ username, password }: Props) => {
  const data = await unauthenticated.post('/members/login', { username, password });
  const accessToken = data.headers['authorization'];
  const refreshToken = data.headers['authorization-refresh'];
  const userId = data.data['memberProfileId'];

  localStorage.setItem('actk', `Bearer ${accessToken}`);
  localStorage.setItem('uid', userId);
  sessionStorage.setItem('rftk', refreshToken);
};
