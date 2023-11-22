import { styled } from 'styled-components';
import { theme } from 'styles/theme';

export const FlexRow = styled.div`
  display: flex;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 2rem;
  padding-bottom: 6rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: fixed;
  bottom: 10%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

/* TeamDetail */

export const Text = styled.div`
  display: flex;
  align-self: flex-start;
  color: #212121;
  font-size: 2rem;
  font-style: normal;
  line-height: 2.4rem;
`;

export const SectionWrapper = styled(FlexColumn)`
  width: 37rem;
`;

export const Title = styled(Text)`
  font-weight: 700;
  margin-left: 1.5rem;
`;

export const MemeberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 37rem;
  border-radius: 3.4rem;
  background: #fafafa;
  padding: 1.6rem 0 1.2rem 0;
`;

export const MemberRowWrapper = styled(FlexRow)`
  gap: 1.6rem;
  padding: 0 2rem;
  align-items: center;
`;

export const Image = styled.img`
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 6rem;
  border: 0.5px solid rgba(0, 0, 0, 0.06);
  background: lightgray 50% / cover no-repeat;
  flex-shrink: 0;
`;

export const Name = styled(Text)`
  font-weight: 900;
`;

export const Age = styled(Text)`
  font-weight: 400;
`;

export const InfoText = styled(Text)`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const KeywordWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  padding-left: 2rem;
  gap: 1rem;
`;

export const TeamKeyword = styled.div`
  display: flex;
  padding: 0.6rem 1.2rem;
  gap: 0.4rem;
  border-radius: 1.8rem;
  background: #ffeef2;
  backdrop-filter: blur(40px);
  color: ${theme.colors.mainPink};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
`;

export const MemeberKeyword = styled.div`
  display: flex;
  padding: 0.6rem 1.2rem;
  align-items: flex-start;
  gap: 0.8rem;
  border-radius: 1.4rem;
  background: #fff;
  backdrop-filter: blur(40px);
  color: #666666;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const TeamDescription = styled.div`
  display: flex;
  align-self: flex-start;
  margin-left: 1.5rem;
  margin-bottom: 2rem;
  color: #999;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const MemberDescription = styled.div`
  color: #999;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`;
