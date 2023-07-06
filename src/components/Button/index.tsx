import { StyledButton } from './style';

interface Prop {
  title: string;
  onClick(): void;
}

export const Button = ({ title, onClick }: Prop) => (
  <StyledButton onClick={onClick}>{title}</StyledButton>
);
