import { styled } from 'styled-components';

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.label`
  color: #666;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  width: 35rem;
  height: 14.2rem;
  border-radius: 1.6rem;
  background: #fafafa;
  padding: 2rem 2rem;

  &::placeholder {
    color: #cccccc;
  }
`;
