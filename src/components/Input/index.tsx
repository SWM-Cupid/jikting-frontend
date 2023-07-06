import { StyledInput, FlexWrapper, StyledChatInput } from './style';

interface Props {
  name: string;
  defaultValue?: string;
  type?: string;
  title?: string;
  onBlur(e: React.FormEvent<HTMLInputElement>): void;
}

export const Input = ({ name, defaultValue, type, title, onBlur }: Props) => (
  <FlexWrapper>
    <span>{title}</span>
    <StyledInput
      name={name}
      defaultValue={defaultValue}
      type={type}
      onBlur={onBlur}
    ></StyledInput>
  </FlexWrapper>
);

export const ChatInput = ({ name, onBlur }: Props) => (
  <StyledChatInput type="text" name={name} onBlur={onBlur}></StyledChatInput>
);
