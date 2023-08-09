import { ComponentProps, ReactNode } from 'react';
import { StyledButton, StyledImageButton } from './style';

interface ButtonProps extends ComponentProps<'button'> {
  size?: 'large' | 'medium' | `small`;
  width?: string;
  color?: string;
  background?: string;
  children?: ReactNode;
}

export const Button = ({ title, type, size = 'large', color = 'white', background = '#ddd', onClick }: ButtonProps) => (
  <StyledButton type={type} size={size} color={color} background={background} onClick={onClick}>
    {title}
  </StyledButton>
);

export const ImageButton = ({ name, width, children, onClick }: ButtonProps) => (
  <StyledImageButton width={width} name={name} onClick={onClick}>
    {children}
  </StyledImageButton>
);
