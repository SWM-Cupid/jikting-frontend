import { styled } from 'styled-components';

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 1rem;
  width: ${Math.min(innerWidth * 0.1, 76.8)}rem;
`;
