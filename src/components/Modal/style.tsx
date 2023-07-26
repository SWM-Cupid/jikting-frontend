import { styled } from 'styled-components';

export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(0.5);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  gap: 3rem;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: ${Math.min(innerWidth * 0.1, 76.8)}rem;
  transform: translate(-50%, 0);
  background: #fff;
  border-radius: 4.4rem 4.4rem 0rem 0rem;
`;

export const Title = styled.div`
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
