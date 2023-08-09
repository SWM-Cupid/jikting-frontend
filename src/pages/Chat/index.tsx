import { Header } from 'components/Header';
import * as S from './style';
import { NavBar } from 'components/NavBar';
import { useChatListQuery } from 'hooks/useChatQuery';

interface ITeam {
  chattingRoomId: number;
  opposingTeamName: string;
  lastMessage: string;
  images: string[];
}

export const ChatList = () => {
  const { isSuccess, data } = useChatListQuery();
  const hanldeTeamButtonClick = () => {
    // TODO
  };

  if (isSuccess && data) {
    const chatList = data.data;
    return (
      <S.ChatWrapper>
        <Header title="채팅" />
        {/* <S.TeamButton>
        <Button size="small" title="팀 이름1" onClick={hanldeTeamButtonClick}></Button>
        <Button size="small" title="팀 이름2" onClick={hanldeTeamButtonClick}></Button>
      </S.TeamButton> */}
        {chatList.map((team: ITeam) => {
          const { chattingRoomId, opposingTeamName, lastMessage, images } = team;
          return (
            <S.TeamWrapper onClick={hanldeTeamButtonClick} key={chattingRoomId}>
              <S.ImagesWrapper>
                {images.map((image) => (
                  <S.Image src={image} key={image} />
                ))}
                <S.Image />
                <S.Image />
              </S.ImagesWrapper>
              <S.FlexColumnGrow>
                <S.TeamName>{opposingTeamName}</S.TeamName>
                <S.RecentMessage>{lastMessage}</S.RecentMessage>
              </S.FlexColumnGrow>
            </S.TeamWrapper>
          );
        })}
        <NavBar defaultActive="chat" />
      </S.ChatWrapper>
    );
  }
};
