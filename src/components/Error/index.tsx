import { ReactNode } from 'react';
import { StyledError } from './style';

export const Error = ({ children }: { children: ReactNode }) => {
  return <StyledError>{children}</StyledError>;
};
