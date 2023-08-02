import { styled } from 'styled-components';

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const NoTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  top: ${innerHeight * 0.03}rem;
  align-items: center;
`;

export const NoTeamDiv = styled.div`
  color: #ccc;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.8rem; /* 116.667% */
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 10%;
`;
