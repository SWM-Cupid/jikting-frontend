import { styled } from 'styled-components';
import downarrow from 'assets/images/downarrow.png';

export const StyledSelect = styled.select`
  width: 34rem;
  height: 5rem;
  border-bottom: 2px solid #d3d3d3;
  background: none;
  font-size: 2rem;
  padding-left: 1rem;
  padding-top: 2rem;
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

export const Title = styled.label`
  padding-left: 1.2rem;
  color: #666;
`;
