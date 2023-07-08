import { styled } from 'styled-components';

export const StyledButton = styled.button`
  width: 360px;
  height: 50px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;

export const StyledImageButton = styled.button<{ width: string }>`
  width: ${({ width }) => width};
  background: none;
  padding: 0;
`;
