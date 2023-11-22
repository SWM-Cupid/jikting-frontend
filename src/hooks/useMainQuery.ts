import { fetchRecommendTeam } from 'api/main';
import { useQuery } from 'react-query';

export const useRecommendTeamQuery = () => {
  const { data, isError } = useQuery(['recommendTeam'], fetchRecommendTeam, { retry: 0 });

  if (isError) return [];
  else return data?.data;
};
