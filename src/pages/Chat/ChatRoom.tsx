import { Header } from 'components/Header';
import * as S from './style';
import { ImageButton } from 'components/Button';
import Menu from 'assets/images/menu.svg';
import { useEffect, useState } from 'react';
import { useChatRoomQuery } from 'hooks/useChatQuery';
import { Message } from '@stomp/stompjs';
import { useStompClient } from 'hooks/useStompClient';
import { EnterMessageForm } from './EnterMessage';

interface Member {
  memberProfileId: number;
  image: string;
  nickname: string;
}

interface MessageBody {
  chattingRoomId: number;
  senderId: number;
  content: string;
  createdDate?: string;
  createdTime?: string;
}

export const ChatRoom = ({
  chattingRoomId,
  previousHandleClick,
}: {
  chattingRoomId: number;
  previousHandleClick?(): void;
}) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const { data } = useChatRoomQuery(chattingRoomId);
  const { subscribe, publish } = useStompClient(chattingRoomId);
  const [messageList, setMessageList] = useState<MessageBody[]>([]);

  useEffect(() => {
    subscribe(showMessage);
  }, [subscribe]);

  useEffect(() => {
    if (data) {
      setMessageList(data.data.chattings);
    }
  }, [data]);
  const toggleSideBar = () => {
    setOpenSideBar((openSideBar) => !openSideBar);
  };

  const handleSideBarClick = () => {
    toggleSideBar();
  };

  const sendMessage = (message: string) => {
    publish(Number(localStorage.getItem('uid')), message);
  };

  const showMessage = (messageBody: Message) => {
    const message = JSON.parse(messageBody.body) as MessageBody;
    setMessageList((messageList) => [message, ...messageList]);
  };

  if (data) {
    const { members }: { members: Member[] } = data.data;
    return (
      <S.ChatRoomWrapper>
        <Header previous previousFunction={previousHandleClick} title="큐피드 저격수들">
          <ImageButton onClick={handleSideBarClick}>
            <Menu />
          </ImageButton>
        </Header>

        <S.Notice>
          <S.CancelButton>미팅 취소하기</S.CancelButton>
          <S.DivideLine />
          <S.AcceptButton>미팅 확정하기</S.AcceptButton>
        </S.Notice>

        <S.Content>
          {messageList.map((message, idx) => {
            const { senderId, content } = message;

            if (senderId === Number(localStorage.getItem('uid'))) {
              return (
                <S.ChatRowRightAlign key={idx}>
                  <S.FlexColumn>
                    <S.MyChat>{content}</S.MyChat>
                  </S.FlexColumn>
                </S.ChatRowRightAlign>
              );
            }

            let profile = '';
            let nickname = '';
            members.map((member) => {
              if (member.memberProfileId === senderId) {
                profile = member.image;
                nickname = member.nickname;
              }
            });
            return (
              <S.ChatRowLeftAlign key={idx}>
                <S.ChatImage src={profile} />
                <S.FlexColumn>
                  <S.NickName>{nickname}</S.NickName>
                  <S.OtherChat>{content}</S.OtherChat>
                </S.FlexColumn>
              </S.ChatRowLeftAlign>
            );
          })}
        </S.Content>

        <EnterMessageForm sendMessage={sendMessage} />
        {openSideBar && <SideBar members={members} toggleSideBar={toggleSideBar} />}
      </S.ChatRoomWrapper>
    );
  }
};

const SideBar = ({ members, toggleSideBar }: { members: Member[]; toggleSideBar(): void }) => {
  return (
    <>
      <S.Mask onClick={toggleSideBar}></S.Mask>
      <S.SideBarWrapper>
        <Header title="대화 상대" />
        {members.map((member) => {
          const { memberProfileId, image, nickname } = member;
          return (
            <S.ImageNickNameWrapper key={memberProfileId}>
              <S.Image src={image} />
              <S.NickName>{nickname}</S.NickName>
            </S.ImageNickNameWrapper>
          );
        })}
      </S.SideBarWrapper>
    </>
  );
};
