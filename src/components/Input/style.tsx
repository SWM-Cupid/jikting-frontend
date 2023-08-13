import { FieldError, FieldErrorsImpl, FieldValues, Merge } from 'react-hook-form';
import { css, styled } from 'styled-components';

export const StyledInput = styled.input<{
  error: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | undefined;
}>`
  width: 342px;
  height: 50px;
  border-bottom: 2px solid #d3d3d3;
  background: none;
  font-size: 1.8rem;
  padding-left: 10px;
  padding-top: 20px;

  &:focus {
    outline: none;
    border-color: #5e9ed6;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: red;
      &:focus {
        outline: none;
        border-color: red;
      }
    `}
`;

// TODO: 다시 확인
export const StyledChatInput = styled.input`
  width: 330px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #f9f9f9;
  padding-top: 0px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
