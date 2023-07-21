import { css, styled } from 'styled-components';

const UPLOAD_IMAGE_SIZE = {
  medium: css`
    width: 23rem;
    height: 23rem;
  `,
  small: css`
    width: 11rem;
    height: 11rem;
  `,
};

export const UploadImageWrapper = styled.div<{ size: 'medium' | 'small' }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.6rem;
  background: #ffeef2;
  background-size: cover;
  ${({ size }) => UPLOAD_IMAGE_SIZE[size]}

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  color: #ff5680;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6rem;
`;

export const CarmeraWrapper = styled.div`
  position: absolute;
  left: 80%;
  top: 80%;
  width: 3.6rem;
  height: 3.6rem;
  padding: 0.8rem;
  gap: 1rem;
  border-radius: 2rem;
  background: rgba(245, 245, 245, 0.2);
  backdrop-filter: blur(40px);
`;
