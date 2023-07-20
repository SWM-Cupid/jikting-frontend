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
  position: fixed;
  top: 30%;
  left: 50%;
  width: 34rem;
  height: 21rem;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 1rem;
`;

export const Title = styled.div`
  position: relative;
  top: 5rem;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  top: 10rem;
  text-align: center;
`;
