import { Button } from 'components/Button';
import * as M from './style';

interface Props {
  title: string;
  handleButtonClick(): void;
}

export const Modal = ({ title, handleButtonClick }: Props) => {
  return (
    <>
      <M.Mask />
      <M.Wrapper>
        <M.Title>{title}</M.Title>
        <M.ButtonWrapper>
          <Button title="확인" size="medium" background="#D9D9D9" onClick={handleButtonClick}></Button>
        </M.ButtonWrapper>
      </M.Wrapper>
    </>
  );
};
