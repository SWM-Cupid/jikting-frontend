import { authenticated, unauthenticated } from './axiosInstance';

interface Props {
  username: string;
  password: string;
}

export const fetchLogin = async ({ username, password }: Props) => {
  const data = await unauthenticated.post('/members/login', { username, password });
  const accessToken = data.headers['authorization'];
  const refreshToken = data.headers['authorization-refresh'];

  localStorage.setItem('actk', `Bearer ${accessToken}`);
  sessionStorage.setItem('rftk', refreshToken);
};
