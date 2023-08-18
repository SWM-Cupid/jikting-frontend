import { styled } from 'styled-components';
import { theme } from 'styles/theme';

export const LoginWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: ${Math.min(768, innerWidth)}px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
`;

export const NormalLoginButton = styled.button`
  width: 30rem;
  height: 4.5rem;
  color: white;
  background: ${theme.colors.mainPink};
  border-radius: 0.5rem;
`;

export const SubButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivideLine = styled.div`
  width: 0.1rem;
  height: 2rem;
  border-radius: 0.1rem;
  background: #eee;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-grow: 6;
`;
export const Logo = styled.img`
  margin: auto;
`;
