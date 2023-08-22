import { ICreateTeam } from 'pages/Team/CreateTeam';
import { authenticated } from './axiosInstance';

export const fetchTeamInfo = async () => {
  const response = await authenticated.get('/teams');
  return response;
};

export const fetchCreateTeam = async (data: ICreateTeam) => {
  const response = await authenticated.post('/teams', data).then((data) => console.log(data));

  return response;
};
