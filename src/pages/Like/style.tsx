import { css, styled } from 'styled-components';
import { theme } from 'styles/theme';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const LikeWrapper = styled(FlexColumn)`
  align-items: center;
  gap: 2rem;
`;

export const TopNavWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 3.8rem;
  border-radius: 2.4rem;
  margin-top: 2rem;
  background: white;
`;

export const TopNavButton = styled.button<{ selected?: boolean }>`
  width: 100%;
  height: 3.8rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
  color: #999999;
  background: white;

  ${({ selected }) =>
    selected &&
    css`
      border-bottom: solid 2px ${theme.colors.mainPink};
      color: ${theme.colors.mainPink};
    `};
`;

export const Content = styled(FlexColumn)`
  gap: 1rem;
  align-items: center;
`;

export const Team = styled(FlexColumn)`
  gap: 0.6rem;
  border-radius: 2rem;
  background: #fafafa;
  width: 95%;
  padding: 1.6rem 1.2rem 1.2rem 1.2rem;
`;

export const TeamFlexRow = styled(FlexRow)`
  justify-content: space-between;
`;

export const TeamInfo = styled(FlexColumn)`
  gap: 0.6rem;
  padding-left: 0.4rem;
`;

export const Title = styled.div`
  color: #212121;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2rem;
`;

export const Description = styled(FlexRow)`
  align-self: flex-start;
  color: #999;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const KeywordWrapper = styled(FlexRow)`
  gap: 0.8rem;
  flex-grow: 1;
`;

export const ImagesWrapper = styled(FlexRow)`
  position: relative;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  margin-left: 1.2rem;
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

export const AcceptButtonWrapper = styled(FlexRow)`
  gap: 1rem;
  align-self: center;
  margin-top: 0.5rem;
`;

export const AcceptButton = styled.button`
  width: ${(innerWidth * 0.08) / 2}rem;
  height: 2.55rem;
  border-radius: 0.6rem;
  background: #ff5680;
  color: #fff;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
`;
