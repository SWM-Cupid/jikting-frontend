import { Header } from 'components/Header';
import * as S from './style';
import { NavBar } from 'components/NavBar';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { useCallback, useState } from 'react';
import { CreateTeam } from './CreateTeam';
import { useQueryTeamInfo } from 'hooks/useTeamInfoQurey';
import { TeamDetail } from './TeamDetail';

export const TeamList = () => {
  const { isSuccess, isError, data } = useQueryTeamInfo();
  const [registerTeam, setRegisterTeam] = useState(false);
  const handleRegisterTeamClick = useCallback(() => {
    setRegisterTeam(true);
  }, []);

  const handleRegisterTeamCompleteClick = useCallback(() => {
    setRegisterTeam(false);
  }, []);

  if (registerTeam) return <CreateTeam handleRegisterTeamCompleteClick={handleRegisterTeamCompleteClick} />;

  if (isError)
    return (
      <>
        <S.TeamWrapper>
          <Header title="팀 리스트" />
          <NoTeam />
          <NavBar defaultActive="team" />
          <S.ButtonWrapper>
            <Button
              size="large"
              title="팀 등록하기"
              background="#FFEEF2"
              color={theme.colors.mainPink}
              onClick={handleRegisterTeamClick}
            ></Button>
          </S.ButtonWrapper>
        </S.TeamWrapper>
      </>
    );

  if (isSuccess && data) return <TeamDetail {...data.data} />;
};

const NoTeam = () => {
  return (
    <S.NoTeamWrapper>
      <img src="src/assets/images/sad.png" width="100px" height="100px"></img>
      <S.NoTeamDiv>
        소속된 팀이 없습니다 <br /> 팀을 만들어보세요
      </S.NoTeamDiv>
    </S.NoTeamWrapper>
  );
};
