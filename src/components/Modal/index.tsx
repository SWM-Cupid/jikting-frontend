import { Button } from 'components/Button';
import * as S from './style';

interface Props {
  title?: string;
  children?: React.ReactNode;
  handleButtonClick?(): void;
}

export const Modal = ({ title, handleButtonClick }: Props) => {
  return (
    <>
      <S.Mask />
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.ButtonWrapper>
          <Button title="확인" size="large" background="#FF5680" onClick={handleButtonClick}></Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
};

export const ModalBottomSheet = ({ children }: Props) => {
  return (
    <>
      <S.Mask />
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
};
