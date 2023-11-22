import { fetchInviteTeam } from 'api/team';
import { useSearchParams } from 'react-router-dom';

export const InviteTeamLink = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const teamId = searchParams.get('team');
  let fetched = false;

  const attendTeam = async () => {
    if (teamId && !fetched) {
      fetched = true;
      await fetchInviteTeam(teamId);
      location.href = '/team';
    }
  };

  try {
    attendTeam();
  } catch (e) {
    console.error(e);
  }

  return <div />;
};
