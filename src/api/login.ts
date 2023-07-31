import { authenticated, unauthenticated } from './axiosInstance';

interface Props {
  username: string;
  password: string;
}

export const fetchLogin = async ({ username, password }: Props) => {
  const data = await unauthenticated.post('/api/v1/members/login', { username, password });

  const accessToken = data.headers['authorization'];
  const refreshToken = data.headers['authorization-refresh'];

  authenticated.defaults.headers['authorization'] = accessToken;
  sessionStorage.setItem('rftk', refreshToken);
};
