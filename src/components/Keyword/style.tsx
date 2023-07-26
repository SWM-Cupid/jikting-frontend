import { css, styled } from 'styled-components';
import { theme } from 'styles/theme';

export const KeyWordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.label`
  padding-left: 1.5rem;
  color: #666;
`;

export const AddBox = styled.div`
  display: flex;
  width: 35rem;
  height: 6.4rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.4rem;
  border-radius: 1.6rem;
  background: #fafafa;

  &:hover {
    cursor: pointer;
  }
`;

export const PlaceHolder = styled.span`
  color: #ccc;
  line-height: 2rem;
`;

export const KeywordList = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 1rem;
  width: 35rem;
  flex-wrap: wrap;
`;

export const ItemWrapper = styled.div<{ selected: boolean | undefined }>`
  display: inline-flex;
  padding: 0.6rem 1.2rem;
  align-items: center;
  gap: 0.4rem;
  border-radius: 1.6rem;
  backdrop-filter: blur(40px);
  border: 1px solid #888888;

  ${({ selected }) =>
    selected &&
    css`
      border-color: currentColor;
      background: #ffeef2;
      border: none;
    `};
`;

export const ItemName = styled.div<{ selected: boolean | undefined }>`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  color: #888888;

  color: ${({ selected }) => selected && theme.colors.mainPink};
`;

export const DeleteCircleWrapper = styled.span`
  line-height: 0;
`;
