import { styled } from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const MyPageWrapper = styled(FlexColumn)`
  position: relative;
  padding-bottom: 4.2rem;
  align-items: center;
  gap: 1rem;
`;

export const ProfileImage = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 8rem;
  border: 0.5px solid rgba(0, 0, 0, 0.06);
  object-fit: cover;
`;

export const MenuItemWrapper = styled(FlexColumn)`
  width: 100%;
`;

export const MenuItem = styled(FlexRow)`
  width: 100%;
  height: 6.4rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  & {
    cursor: pointer;
  }
`;

export const MenuTitle = styled.div`
  color: #212121;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
`;

export const MenuContentWrapper = styled(FlexRow)`
  gap: 0.8rem;
  align-items: center;
`;

export const MenuContent = styled.div`
  color: #999;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;
