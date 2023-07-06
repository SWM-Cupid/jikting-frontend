import { styled } from 'styled-components';

export const StyledInput = styled.input`
  width: 342px;
  height: 50px;
  border-bottom: 2px solid #d3d3d3;
  background: none;
  font-size: 2rem;
  padding-left: 10px;
  padding-top: 20px;

  &:focus {
    outline: none;
    border-color: #5e9ed6;
  }
`;

export const StyledChatInput = styled(StyledInput)`
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
