import { styled } from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

export const TeamButton = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TeamWrapper = styled.div`
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

export const ImagesWrapper = styled.div`
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

export const FlexColumn = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
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
