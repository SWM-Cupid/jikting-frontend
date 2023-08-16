import { keyframes, styled } from 'styled-components';
import { theme } from 'styles/theme';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const ChatWrapper = styled(FlexColumn)`
  align-items: center;
  gap: 0.6rem;
`;

export const TeamButton = styled(FlexRow)`
  display: flex;
  gap: 1rem;
`;

export const TeamWrapper = styled(FlexRow)`
  display: flex;
  justify-content: space-between;
  width: ${Math.min(innerWidth * 0.095, 76.8 * 0.95)}rem;
  height: 8rem;
  border-radius: 1.2rem;
  background: #fafafa;

  :hover {
    cursor: pointer;
  }
`;

export const ImagesWrapper = styled(FlexRow)`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 2rem;
`;

export const Image = styled.img`
  position: relative;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 3rem;
  border: 2px solid #fafafa;
  background: lightgray 50% / cover no-repeat;

  &:nth-child(1) {
    z-index: 4;
  }

  &:nth-child(2) {
    left: -10%;
    z-index: 3;
  }

  &:nth-child(3) {
    left: -20%;
    z-index: 2;
  }

  &:nth-child(4) {
    left: -30%;
    z-index: 1;
  }
`;

export const FlexColumnGrow = styled(FlexColumn)`
  flex-grow: 1;
  justify-content: center;
`;

export const TeamName = styled.div`
  color: #212121;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem;
`;

export const RecentMessage = styled.div`
  color: #999;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`;

/* chatroom */

export const ChatRoomWrapper = styled(FlexColumn)`
  position: absolute;
  height: 100dvh;
  width: 100%;
  align-items: center;
  gap: 0.6rem;
  background: #fcdee2;
  z-index: 10;
  /* background: #fafafa; */
`;

export const Notice = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  width: ${Math.min(innerWidth * 0.095, 76.8 * 0.95)}rem;
  height: 5.6rem;
  border-radius: 1.6rem;
  background: #fff;
  box-shadow: 0px 2px 24px 0px rgba(238, 238, 238, 0.08);
`;

export const CancelButton = styled.button`
  width: 50%;
  height: 100%;
  border-radius: 1.6rem;
  background: none;
  color: #666;
`;

export const AcceptButton = styled(CancelButton)`
  color: ${theme.colors.mainPink};
`;

export const DivideLine = styled.div`
  width: 0.1rem;
  height: 50%;
  border-radius: 0.1rem;
  background: #eee;
`;

export const EnterMessage = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0rem;
  width: ${Math.min(innerWidth * 0.1, 76.8)}rem;
  height: 5rem;
  background: white;
  padding: 0 1rem;
  > button {
    position: absolute;
    right: 2rem;
    z-index: 1;
    line-height: 0;
  }
`;

export const ChatInput = styled.input`
  position: absolute;
  width: ${Math.min(innerWidth * 0.095, 76.8 * 0.95)}rem;
  height: 80%;
  background: none;
  border-radius: 2.8rem;
  background: #fafafa;
  color: #212121;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  padding-left: 2rem;
  &:focus {
    outline: none;
  }
`;

export const Content = styled(FlexColumn)`
  gap: 0.6rem;
  padding: 1rem 0;
  flex-direction: column-reverse;
  width: ${Math.min(innerWidth * 0.095, 76.8 * 0.95)}rem;
  max-height: ${innerHeight * 0.1 - 17.6}rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatRowLeftAlign = styled(FlexRow)`
  gap: 1rem;
  margin-bottom: 0.4rem;
`;

export const ChatRowRightAlign = styled(FlexRow)`
  gap: 1rem;
  align-self: flex-end;
`;

export const ChatImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 3rem;
  border: 0.5px solid rgba(0, 0, 0, 0.06);
  background: lightgray 50% / cover no-repeat;
`;

export const OtherChat = styled(FlexRow)`
  padding: 0.6rem 1rem;
  align-items: center;
  border-radius: 0.4rem 2.2rem 2.2rem 2.2rem;
  background: ${theme.colors.mainWhite};
  font-size: 1.4rem;
  max-width: ${Math.min(innerWidth * 0.065, 76.8 * 0.65)}rem;
`;

export const MyChat = styled(FlexRow)`
  padding: 0.6rem 0.6rem 0.6rem 1.4rem;
  align-items: center;
  border-radius: 2.2rem 2.2rem 0.4rem 2.2rem;
  background: ${theme.colors.mainPink};
  font-size: 1.4rem;
  color: ${theme.colors.mainWhite};
  max-width: ${Math.min(innerWidth * 0.065, 76.8 * 0.65)}rem;
`;

/* sidebar */
const slideIn = keyframes`
  from {
    transform: translateX(150%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const SideBarWrapper = styled(FlexColumn)`
  position: absolute;
  right: 0;
  width: ${Math.min(innerWidth * 0.07, 76.8 * 0.7)}rem;
  height: 100dvh;
  background: ${theme.colors.mainWhite};
  gap: 1.2rem;
  z-index: 3;
  animation-duration: 0.3s;
  animation-name: ${slideIn};
`;

export const ImageNickNameWrapper = styled(FlexRow)`
  gap: 1rem;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const NickName = styled.div`
  color: #212121;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
`;

export const Mask = styled.div`
  position: absolute;
  width: ${Math.min(innerWidth * 0.1, 76.8)}rem;
  height: 100%;
  margin: 0 auto;
  background: rgb(0, 0, 0, 0.2);
`;
