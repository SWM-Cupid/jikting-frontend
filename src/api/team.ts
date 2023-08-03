import { ICreateTeam } from 'pages/Team/CreateTeam';
import { authenticated } from './axiosInstance';

export const fetchTeamInfo = async () => {
  const response = await authenticated.get('/api/v1/teams/18');
  return response;
};

export const fetchCreateTeam = async (data: ICreateTeam) => {
  const response = await authenticated.post('/api/v1/teams', data).then((data) => console.log(data));

  return response;
};
