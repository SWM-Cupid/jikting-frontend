import { Header } from 'components/Header';
import * as S from './style';
import { Input } from 'components/Input';
import { useState } from 'react';
import { Button } from 'components/Button';

interface UserInfo {
  [property: string]: string;
}

interface EventProps {
  onBlur(e: React.FormEvent<HTMLInputElement>): void;
  handleNextClick(): void;
}

export const SignUp = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userId: '',
    userPassword: '',
    userNickName: '',
    userName: '',
    userPhoneNumber: '',
  });

  const onBlur = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInfo({ [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleNextClick = () => {
    setStep((step) => step + 1);
  };

  return (
    <S.SignUpWrapper>
      <Header previous title="회원가입" />
      <SignUpIdPassword onBlur={onBlur} handleNextClick={handleNextClick} />
    </S.SignUpWrapper>
  );
};

const SignUpIdPassword = ({ onBlur, handleNextClick }: EventProps) => {
  return (
    <S.Content>
      <Input title="아이디" name="userId" onBlur={onBlur} />
      <Input
        type="password"
        title="비밀번호"
        name="userPassword"
        onBlur={onBlur}
      ></Input>
      <Input
        type="password"
        title="비밀번호 확인"
        name="userPasswordCheck"
        onBlur={onBlur}
      ></Input>
      <Input title="닉네임" name="userName" onBlur={onBlur}></Input>
      <Button title="다음" onClick={handleNextClick}></Button>
    </S.Content>
  );
};
