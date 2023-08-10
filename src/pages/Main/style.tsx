import { css, styled } from 'styled-components';

export const FlexColum = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const MainWrapper = styled(FlexColum)`
  align-items: center;
  gap: 1rem;
`;

export const TeamInfo = styled(FlexColum)`
  gap: 1rem;
`;

export const TeamName = styled.div`
  color: #212121;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 900;
  line-height: 2.8rem;
`;

export const TeamDescription = styled.div`
  color: #999;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const TeamKeyword = styled(FlexRow)`
  gap: 1rem;
`;

export const SlideContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: ${Math.min(innerWidth * 0.1, 76.8)}rem;
  height: ${innerHeight * 0.06}rem;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  padding: 0 ${Math.min(innerWidth * 0.015, 76.8)}rem;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export const SlideItem = styled.div<{ imageurl: string }>`
  flex: 0 0 ${Math.min(innerWidth * 0.085, 76.8)}rem;
  scroll-snap-align: center;
  border-radius: 3.4rem;
  background: ${({ imageurl }) => `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%),
    url(${imageurl}) lightgray 50% / cover no-repeat;`};
`;
