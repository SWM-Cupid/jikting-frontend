import { Header } from 'components/Header';
import * as S from './style';
import { ImageButton } from 'components/Button';
import Menu from 'assets/images/menu.svg';
import Send from 'assets/images/send.svg';
import { useState } from 'react';
import { useChatRoomQuery } from 'hooks/useChatQuery';

interface Member {
  memberId: number;
  image: string;
  nickname: string;
}

export const ChatRoom = ({ chattingRoomId }: { chattingRoomId: number }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const { isLoading, isSuccess, data } = useChatRoomQuery(23);

  if (isLoading) return <div>로딩중...</div>;

  const toggleSideBar = () => {
    setOpenSideBar((openSideBar) => !openSideBar);
  };

  const handleSideBarClick = () => {
    toggleSideBar();
  };
  const members: Member[] = [
    {
      memberId: 1,
      image: '이미지 주소1',
      nickname: '닉네임1',
    },
    {
      memberId: 2,
      image: '이미지 주소2',
      nickname: '닉네임2',
    },
    {
      memberId: 3,
      image: '이미지 주소3',
      nickname: '닉네임3',
    },
  ];

  if (isSuccess && data)
    return (
      <S.ChatRoomWrapper>
        <Header previous>
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
          <S.ChatRowRightAlign>
            <S.FlexColumn>
              <S.MyChat>아니야 못 가 아니야 못 가 아니야 못 가 아니야 못 가</S.MyChat>
            </S.FlexColumn>
          </S.ChatRowRightAlign>

          <S.ChatRowLeftAlign>
            <S.ChatImage src="test" />
            <S.FlexColumn>
              <S.NickName>집보내줘</S.NickName>
              <S.OtherChat>집가고 싶어</S.OtherChat>
            </S.FlexColumn>
          </S.ChatRowLeftAlign>

          <S.ChatRowLeftAlign>
            <S.ChatImage src="test" />
            <S.FlexColumn>
              <S.NickName>집보내줘</S.NickName>
              <S.OtherChat>으ㅏㅇ아으ㅏ으ㅏ으ㅏㅡ아ㅡ아아ㅡ아ㅏ으아ㅏ으ㅏ으ㅏ</S.OtherChat>
            </S.FlexColumn>
          </S.ChatRowLeftAlign>
        </S.Content>

        <S.EnterMessage>
          <S.ChatInput />
          <ImageButton>
            <Send />
          </ImageButton>
        </S.EnterMessage>
        {openSideBar && <SideBar members={members} toggleSideBar={toggleSideBar} />}
      </S.ChatRoomWrapper>
    );
};

const SideBar = ({ members, toggleSideBar }: { members: Member[]; toggleSideBar(): void }) => {
  return (
    <>
      <S.Mask onClick={toggleSideBar}></S.Mask>
      <S.SideBarWrapper>
        <Header title="대화 상대" />
        {members.map((member) => {
          const { memberId, image, nickname } = member;
          return (
            <S.ImageNickNameWrapper key={memberId}>
              <S.Image src={image} />
              <S.NickName>{nickname}</S.NickName>
            </S.ImageNickNameWrapper>
          );
        })}
      </S.SideBarWrapper>
    </>
  );
};
