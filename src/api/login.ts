import { unauthenticated } from './axiosInstance';

interface Props {
  username: string;
  password: string;
}

export const fetchLogin = async ({ username, password }: Props) => {
  const data = await unauthenticated.post('/api/v1/members/login', { username, password });
  console.log(data);
};
