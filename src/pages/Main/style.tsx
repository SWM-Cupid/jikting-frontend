import { css, styled } from 'styled-components';

export const FlexColum = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const MainWrapper = styled(FlexColum)`
  position: relative;
  align-items: center;
  gap: 1rem;
  overflow-y: auto;
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
  padding: 0 ${Math.min(innerWidth * 0.0075, 76.8)}rem;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export const SlideItem = styled.div<{ imageurl: string }>`
  position: relative;
  flex: 0 0 ${Math.min(innerWidth * 0.085, 76.8)}rem;
  scroll-snap-align: center;
  border-radius: 3.4rem;
  background: ${({ imageurl }) => `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%),
    url(${imageurl}) lightgray 50% / cover no-repeat;`};
`;

export const Member = styled(FlexColum)`
  position: absolute;
  bottom: 1rem;
  width: 90%;
  gap: 0.8rem;
  margin: 0 2rem;
`;

export const Name = styled.div`
  color: #fff;
  font-size: 2.8rem;
  font-weight: 900;
  line-height: 3.2rem;
`;

export const Age = styled(Name)`
  font-weight: 400;
`;

export const MemberInfo = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
`;

export const MemberDescription = styled.div`
  color: #fff;
  font-size: 1.4rem;
  line-height: 2rem;
`;

export const MemeberKeywordWrapper = styled(FlexRow)`
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const MemberKeyword = styled.div`
  display: flex;
  padding: 0.6rem 1.2rem;
  align-items: flex-start;
  gap: 0.8rem;
  border-radius: 1.4rem;
  backdrop-filter: blur(20px);
  background: rgba(245, 245, 245, 0.2);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
`;

export const DotsWrapper = styled(FlexRow)`
  width: 6rem;
  height: 2.4rem;
  padding: 0.8rem;
  gap: 0.6rem;
  flex-shrink: 0;
  border-radius: 1.3rem;
  background: #fafafa;
`;

export const Dot = styled.div<{ selected?: boolean }>`
  width: 0.8rem;
  height: 0.8rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #e4e4e4;
  transition: all ease-in-out 0.3s;

  ${({ selected }) =>
    selected &&
    css`
      width: 1.6rem;
      background: #212121;
      transition: all ease-in-out 0.3s;
    `}
`;

export const Likeable = styled(FlexRow)`
  position: relative;
  top: -2rem;
  justify-content: space-between;
  width: 85%;
`;
