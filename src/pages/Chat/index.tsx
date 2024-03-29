import { Header } from 'components/Header';
import * as S from './style';
import { NavBar } from 'components/NavBar';
import { useChatListQuery } from 'hooks/useChatQuery';
import { useState } from 'react';
import { ChatRoom } from './ChatRoom';

interface ITeam {
  chattingRoomId: number;
  opposingTeamName: string;
  lastMessage: string;
  images: string[];
}

export const ChatList = () => {
  const { isSuccess, data } = useChatListQuery();
  const [enterChatRoomId, setEnterChatRoomId] = useState(0);
  const hanldeTeamButtonClick = (chattingRoomId: number) => {
    setEnterChatRoomId(chattingRoomId);
  };

  const previousHandleClick = () => {
    setEnterChatRoomId(0);
  };

  if (isSuccess && data) {
    const chatList = data.data;
    return (
      <S.ChatWrapper>
        <Header title="채팅" />
        {chatList.map((team: ITeam) => {
          const { chattingRoomId, opposingTeamName, lastMessage, images } = team;
          return (
            <S.TeamWrapper onClick={() => hanldeTeamButtonClick(chattingRoomId)} key={chattingRoomId}>
              <S.ImagesWrapper>
                {images.map((image) => (
                  <S.Image src={image} key={image} />
                ))}
              </S.ImagesWrapper>
              <S.FlexColumnGrow>
                <S.TeamName>{opposingTeamName}</S.TeamName>
                <S.RecentMessage>{lastMessage}</S.RecentMessage>
              </S.FlexColumnGrow>
            </S.TeamWrapper>
          );
        })}
        <NavBar defaultActive="chat" />
        {enterChatRoomId ? (
          <ChatRoom chattingRoomId={enterChatRoomId} previousHandleClick={previousHandleClick} />
        ) : null}
      </S.ChatWrapper>
    );
  }
};
