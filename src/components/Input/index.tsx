import { ComponentProps, forwardRef } from 'react';
import { StyledInput, StyledChatInput, InputWrapper } from './style';
import { FieldError, FieldErrorsImpl, FieldValues, Merge } from 'react-hook-form';
import { Error } from 'components/Error';
import { StyledError } from 'components/Error/style';

export const Input = forwardRef(
  (
    {
      error,
      animate,
      title,
      ...props
    }: ComponentProps<'input'> & {
      error?: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
      animate?: 'bottomUp';
    },

    ref: React.Ref<HTMLInputElement> | null,
  ) => (
    <InputWrapper animate={animate}>
      <label>{title}</label>
      <StyledInput error={error} {...props} ref={ref}></StyledInput>
      {error ? <Error>{error.message?.toString()}</Error> : <StyledError />}
    </InputWrapper>
  ),
);
Input.displayName = 'Input';

export const ChatInput = ({ name, onBlur }: ComponentProps<'input'>) => (
  <StyledChatInput type="text" name={name} onBlur={onBlur}></StyledChatInput>
);
