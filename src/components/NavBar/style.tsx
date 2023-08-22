import { styled } from 'styled-components';

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0rem;
  padding: 0.5rem 0rem;
  width: ${Math.min(innerWidth * 0.1, 76.8)}rem;
  background: white;
  border-top: 1px solid #fafafa;
  z-index: 10;
`;
