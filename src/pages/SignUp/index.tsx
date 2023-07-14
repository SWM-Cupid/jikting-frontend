import { Header } from 'components/Header';
import { useState } from 'react';
import * as S from './style';
import { SignUpIdPassword } from './SignUpIdPassword';
import { SignUpNickName } from './SignUpNickName';
import { SignUpAuthPhoneNumber } from './SignUpAuthPhoneNumber';

export const SignUp = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPassword: '',
    userNickName: '',
    userName: '',
    userPhoneNumber: '',
  });
  const [isSendCode, setIsSendCode] = useState(false);
  const [code, setCode] = useState('');

  const handleSignUpClick = () => {
    setIsSendCode(true);
    // 인증번호 확인
    // 회원가입 기능
  };

  const handleUserInfoChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUserInfo({ ...userInfo, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleNextClick = () => {
    setStep((step) => step + 1);
  };

  const handleCheckPasswordBlur = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== userInfo.userPassword) {
      // 에러 메시지 띄우기
      console.log('ERROR');
    }
  };

  return (
    <S.SignUpWrapper>
      <Header previous title="회원가입" />
      <S.Content>
        {step === 1 && (
          <SignUpIdPassword
            userInfo={userInfo}
            handleUserInfoChange={handleUserInfoChange}
            handleNextClick={handleNextClick}
            handleCheckPasswordBlur={handleCheckPasswordBlur}
          />
        )}
        {step === 2 && (
          <SignUpNickName
            userInfo={userInfo}
            handleUserInfoChange={handleUserInfoChange}
            handleButtonClick={handleButtonClick}
            handleNextClick={handleNextClick}
          />
        )}
        {step === 3 && (
          <SignUpAuthPhoneNumber
            isSendCode={isSendCode}
            handleSignUpClick={handleSignUpClick}
            handleUserInfoChange={handleUserInfoChange}
          />
        )}
      </S.Content>
    </S.SignUpWrapper>
  );
};
