import { styled } from 'styled-components';

export const EmptyDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  top: ${innerHeight * 0.03}rem;
  align-items: center;
`;

export const Message = styled.div`
  color: #ccc;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.8rem;
`;
