import { ComponentProps, ReactNode } from 'react';
import { StyledButton, StyledImageButton } from './style';

interface ButtonProps extends ComponentProps<'button'> {
  size?: 'large' | 'medium';
  color?: string;
  background?: string;
  children?: ReactNode;
}

export const Button = ({ title, size = 'large', color = 'white', background = '#ddd', onClick }: ButtonProps) => (
  <StyledButton size={size} color={color} background={background} onClick={onClick}>
    {title}
  </StyledButton>
);

export const ImageButton = ({ children, onClick }: ButtonProps) => (
  <StyledImageButton width="2rem" onClick={onClick}>
    {children}
  </StyledImageButton>
);
