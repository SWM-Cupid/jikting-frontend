import { fetchCreateTeam, fetchTeamInfo } from 'api/team';
import { useMutation, useQuery } from 'react-query';

export const useQueryTeamInfo = () => {
  return useQuery(['teamInfo'], fetchTeamInfo, {
    onSuccess: ({ data }) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
    retry: false,
  });
};

export const useMutateCreateTeam = () => {
  return useMutation(fetchCreateTeam, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
