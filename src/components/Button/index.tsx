import { ReactNode } from 'react';
import { StyledButton, StyledImageButton } from './style';

interface Props {
  title?: string;
  children?: ReactNode;
  onClick(): void;
}

export const Button = ({ title, onClick }: Props) => (
  <StyledButton onClick={onClick}>{title}</StyledButton>
);

export const ImageButton = ({ children, onClick }: Props) => (
  <StyledImageButton width="2rem" onClick={onClick}>
    {children}
  </StyledImageButton>
);
