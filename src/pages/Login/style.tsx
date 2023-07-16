import { styled } from 'styled-components';

export const SelectLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  bottom: 5rem;
`;

export const NormalLoginButton = styled.button`
  width: 30rem;
  height: 4.5rem;
  color: #ff5680;
  background: #ffeef2;
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
