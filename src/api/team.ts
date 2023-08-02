import { authenticated } from './axiosInstance';

export const fetchTeamInfo = async () => {
  const response = await authenticated.get('/api/v1/teams/1').then((data) => console.log(data));

  return response;
};
