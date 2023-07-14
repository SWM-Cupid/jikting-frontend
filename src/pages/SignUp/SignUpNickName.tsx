import { Input } from 'components/Input';
import { Button } from 'components/Button';
import * as S from './style';
import { useState } from 'react';

interface Props {
  userInfo: {
    userId: string;
    userPassword: string;
    userNickName: string;
    userName: string;
    userPhoneNumber: string;
  };
  handleNextClick(): void;
  setUserGender(usergender: string): void;
  handleUserInfoChange(e: React.FormEvent<HTMLInputElement>): void;
}
const genderList = ['남성', '여성'];

export const SignUpNickName = ({ userInfo, handleUserInfoChange, setUserGender, handleNextClick }: Props) => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUserGender(e.currentTarget.innerText);
    setSelectedGender(e.currentTarget.innerText);
  };
  return (
    <>
      <Input title="닉네임" value={userInfo.userNickName} name="userNickName" onChange={handleUserInfoChange} />
      <S.GenderWrapper>
        <span>성별</span>
        <S.ButtonWrapper>
          {genderList.map((gender) => (
            <Button
              key={gender}
              title={gender}
              size="medium"
              color={selectedGender === gender ? '#FF5680' : '#999'}
              background={selectedGender === gender ? 'rgba(255, 86, 128, 0.10)' : '#F2F2F2'}
              onClick={handleButtonClick}
            ></Button>
          ))}
        </S.ButtonWrapper>
      </S.GenderWrapper>
      <Button title="다음" onClick={handleNextClick}></Button>
    </>
  );
};
