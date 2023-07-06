import { styled } from 'styled-components';
import downarrow from 'assets/downarrow.png';

export const StyledSelect = styled.select`
  width: 342px;
  height: 50px;
  border-bottom: 2px solid #d3d3d3;
  background: none;
  font-size: 2rem;
  padding-left: 10px;
  padding-top: 20px;
  appearance: none;
  background: url(${downarrow}) no-repeat right 1rem center;

  &:focus {
    outline: none;
    border-color: #5e9ed6;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
