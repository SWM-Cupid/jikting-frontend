import { styled } from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;
  margin: 2rem auto;
`;

export const FindIdResultWrapper = styled(FlexColumn)`
  position: absolute;
  height: 100%;
  width: 100%;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export const Result = styled(FlexColumn)`
  height: 20%;
  font-size: 1.8rem;
  text-align: center;
`;
