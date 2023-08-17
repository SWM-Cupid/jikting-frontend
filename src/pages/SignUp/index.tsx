import { Header } from 'components/Header';
import { useState } from 'react';
import * as S from './style';
import { SignUpIdPassword } from './SignUpIdPassword';
import { SignUpNickName } from './SignUpNickName';
import { SignUpAuthPhoneNumber } from './SignUpAuthPhoneNumber';
import { useNavigate } from 'react-router-dom';

export interface UserInfo {
  userId: string;
  userPassword: string;
  userNickName: string;
  userName: string;
  userPhoneNumber: string;
  userGender: string;
}

export const SignUp = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userId: '',
    userPassword: '',
    userNickName: '',
    userName: '',
    userPhoneNumber: '',
    userGender: '',
  });
  const navigate = useNavigate();

  const updateUserInfo = (data: { [userData: string]: string }) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      ...data,
    }));
  };

  const handleNextClick = () => {
    setStep((step) => step + 1);
  };

  const handlePreviousClick = () => {
    console.log(step);

    if (step === 1) {
      navigate(-1);
      return;
    }

    setStep((step) => step - 1);
  };
  return (
    <S.SignUpWrapper>
      <Header previous previousFunction={handlePreviousClick} title="회원가입" />
      <S.Content>
        {step === 1 && <SignUpIdPassword updateUserInfo={updateUserInfo} handleNextClick={handleNextClick} />}
        {step === 2 && <SignUpNickName updateUserInfo={updateUserInfo} handleNextClick={handleNextClick} />}
        {step === 3 && <SignUpAuthPhoneNumber userInfo={userInfo} updateUserInfo={updateUserInfo} />}
      </S.Content>
    </S.SignUpWrapper>
  );
};
