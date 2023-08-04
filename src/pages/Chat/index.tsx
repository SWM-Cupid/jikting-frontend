import { Header } from 'components/Header';
import * as S from './style';
import { NavBar } from 'components/NavBar';

export const ChatList = () => {
  const hanldeTeamButtonClick = () => {
    // TODO
  };

  return (
    <S.ChatWrapper>
      <Header title="채팅" />
      {/* <S.TeamButton>
        <Button size="small" title="팀 이름1" onClick={hanldeTeamButtonClick}></Button>
        <Button size="small" title="팀 이름2" onClick={hanldeTeamButtonClick}></Button>
      </S.TeamButton> */}
      <S.TeamWrapper onClick={hanldeTeamButtonClick}>
        <S.ImagesWrapper>
          <S.Image />
          <S.Image />
          <S.Image />
        </S.ImagesWrapper>
        <S.FlexColumn>
          <S.TeamName>상대 팀 이름1</S.TeamName>
          <S.RecentMessage>최근 메시지</S.RecentMessage>
        </S.FlexColumn>
      </S.TeamWrapper>
      <NavBar defaultActive="chat" />
    </S.ChatWrapper>
  );
};
