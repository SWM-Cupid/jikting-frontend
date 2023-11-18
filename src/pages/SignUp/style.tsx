import { css, styled } from 'styled-components';
import { theme } from 'styles/theme';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled(FlexColumn)`
  width: 100%;
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

export const TermsofServiceBox = styled(FlexColumn)`
  gap: 2rem;
  width: 85%;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const CheckBox = styled.button<{ size?: string }>`
  display: flex;
  gap: 1rem;
  align-items: center;
  background: none;
  font-size: 1.8rem;
  font-weight: 600;

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 2rem;
      font-weight: 700;
    `}
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 0.1rem;
  border-radius: 0.1rem;
  background: #eee;
`;

export const TermsContent = styled(FlexColumn)`
  height: 12rem;
  border: 1px solid ${theme.colors.buttonGrey};
  border-radius: 1rem;
  padding: 1rem 1rem;
  overflow: scroll;
  gap: 1rem;
`;
