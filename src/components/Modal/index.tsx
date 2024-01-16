import { Button } from 'components/Button';
import * as S from './style';
import ModalPortal from './ModalPortal';

interface ModalProps {
  title: string;
  handleMaskClick?(): void;
  handleButtonClick(): void;
}

export const Modal = ({ title, handleMaskClick, handleButtonClick }: ModalProps) => {
  return (
    <ModalPortal>
      <S.Mask onClick={handleMaskClick} />
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.ButtonWrapper>
          <Button title="확인" size="large" background="#FF5680" onClick={handleButtonClick}></Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </ModalPortal>
  );
};

export const ModalBottomSheet = ({
  handleMaskClick,
  children,
}: {
  handleMaskClick(): void;
  children: React.ReactNode;
}) => {
  return (
    <>
      <S.Mask onClick={handleMaskClick} />
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
};
