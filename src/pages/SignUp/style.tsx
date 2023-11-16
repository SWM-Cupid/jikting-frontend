import { styled } from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled(FlexColumn)`
  align-items: center;
  gap: 2.6rem;
  margin: 2rem auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
