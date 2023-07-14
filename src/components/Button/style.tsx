import { styled, css } from 'styled-components';

const BUTTON_SIZE = {
  large: css`
    width: 35rem;
    height: 6rem;
    border-radius: 1rem;
  `,
  medium: css`
    width: 17rem;
    height: 5rem;
    border-radius: 1.6rem;
  `,
};

export const StyledButton = styled.button<{ size: 'large' | 'medium'; color: string; background: string }>`
  ${({ size, color, background }) =>
    css`
      ${BUTTON_SIZE[size]};
      color: ${color};
      background: ${background};
    `};
`;

export const StyledImageButton = styled.button<{ width: string }>`
  width: ${({ width }) => width};
  background: none;
  padding: 0;
`;
