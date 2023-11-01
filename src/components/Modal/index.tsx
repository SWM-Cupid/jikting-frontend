import { Button } from 'components/Button';
import * as S from './style';

interface Props {
  title?: string;
  children?: React.ReactNode;
  handleMaskClick?(): void;
  handleButtonClick?(): void;
}

export const Modal = ({ title, handleMaskClick, handleButtonClick }: Props) => {
  return (
    <S.Mask onClick={handleMaskClick}>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.ButtonWrapper>
          <Button title="확인" size="large" background="#FF5680" onClick={handleButtonClick}></Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Mask>
  );
};

export const ModalBottomSheet = ({ handleMaskClick, children }: Props) => {
  return (
    <>
      <S.Mask onClick={handleMaskClick} />
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
};
