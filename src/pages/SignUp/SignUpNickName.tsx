import { Input } from 'components/Input';
import { Button } from 'components/Button';
import * as S from './style';

interface Props {
  userInfo: {
    userId: string;
    userPassword: string;
    userNickName: string;
    userName: string;
    userPhoneNumber: string;
  };
  handleNextClick(): void;
  handleButtonClick(e: React.MouseEvent<HTMLButtonElement>): void;
  handleUserInfoChange(e: React.FormEvent<HTMLInputElement>): void;
}

export const SignUpNickName = ({ userInfo, handleUserInfoChange, handleButtonClick, handleNextClick }: Props) => {
  return (
    <>
      <Input title="닉네임" value={userInfo.userNickName} name="userNickName" onChange={handleUserInfoChange} />
      <S.GenderWrapper>
        <span>성별</span>
        <S.ButtonWrapper>
          <Button title="남성" size="medium" color="#999" background="#fafafa" onClick={handleButtonClick}></Button>
          <Button title="여성" size="medium" color="#999" background="#fafafa" onClick={handleButtonClick}></Button>
        </S.ButtonWrapper>
      </S.GenderWrapper>
      <Button title="다음" onClick={handleNextClick}></Button>
    </>
  );
};
