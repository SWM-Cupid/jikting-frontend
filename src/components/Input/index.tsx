import { ComponentProps, forwardRef } from 'react';
import { StyledInput, FlexWrapper, StyledChatInput } from './style';
import { FieldError, FieldErrorsImpl, FieldValues, Merge } from 'react-hook-form';
import { Error } from 'components/Error';
import { StyledError } from 'components/Error/style';

export const Input = forwardRef(
  (
    {
      error,
      title,
      ...props
    }: ComponentProps<'input'> & { error?: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> },
    ref: React.Ref<HTMLInputElement> | null,
  ) => (
    <FlexWrapper>
      <label>{title}</label>
      <StyledInput error={error} {...props} ref={ref}></StyledInput>
      {error ? <Error>{error.message?.toString()}</Error> : <StyledError />}
    </FlexWrapper>
  ),
);
Input.displayName = 'Input';

export const ChatInput = ({ name, onBlur }: ComponentProps<'input'>) => (
  <StyledChatInput type="text" name={name} onBlur={onBlur}></StyledChatInput>
);
