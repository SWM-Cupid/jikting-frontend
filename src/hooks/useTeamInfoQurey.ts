import { fetchTeamInfo } from 'api/team';
import { useQuery } from 'react-query';

export const useQueryTeamInfo = () => {
  return useQuery(['teamInfo'], fetchTeamInfo, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
    retry: false,
  });
};
