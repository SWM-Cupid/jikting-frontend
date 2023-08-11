import { fetchRecommendTeam } from 'api/main';
import { useQuery } from 'react-query';

export const useRecommendTeamQuery = () => {
  const { data, isLoading } = useQuery(['recommendTeam'], fetchRecommendTeam, {
    onSuccess: ({ data }) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { data, isLoading };
};
