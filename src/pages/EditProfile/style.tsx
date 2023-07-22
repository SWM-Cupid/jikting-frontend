import { styled } from 'styled-components';

export const EditProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const UploadImageWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const UploadImageSmallWrapper = styled(EditProfileWrapper)`
  gap: 1rem;
`;
