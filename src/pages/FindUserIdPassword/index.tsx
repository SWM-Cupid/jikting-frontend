import { Header } from 'components/Header';
import * as S from './style';
import { useState } from 'react';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

export const FindUserIdPassword = ({ findType }: { findType: string }) => {
  const [isSendCode, setIsSendCode] = useState(false);
  const [code, setCode] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [UsesrPhoneNumber, setUserPhoneNumber] = useState('');

  const handleIdBlur = (e: React.FormEvent<HTMLInputElement>) => {
    setUserId(e.currentTarget.value);
  };

  const handleCodeBlur = (e: React.FormEvent<HTMLInputElement>) => {
    setCode(e.currentTarget.value);
  };

  const handleNameBlur = (e: React.FormEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
  };

  const handlePhoneNumberBlur = (e: React.FormEvent<HTMLInputElement>) => {
    setUserPhoneNumber(e.currentTarget.value);
  };

  /* TODO - handleButtonClick
   * "인증번호 전송": 폼 채워져 있는지 확인하고 인증번호 요청
   * "다음": 입력한 인증번호 확인 후 성공 혹은 실패 동작 수행
   */
  const handleButtonClick = () => {
    setIsSendCode(true);
  };

  return (
    <S.FindUserIdPasswordWrapper>
      <Header previous />
      <S.Content>
        {isSendCode ? <Input title="인증번호" name="user" onBlur={handleCodeBlur} /> : null}
        {findType === 'findPassword' ? <Input title="아이디" name="userName" onBlur={handleIdBlur} /> : null}
        <Input title="이름" name="userName" onBlur={handleNameBlur} />
        <Input title="휴대폰 번호" name="userPhoneNumber" onChange={handlePhoneNumberBlur} />
        <Button title={isSendCode ? '다음' : '인증번호 전송'} onClick={handleButtonClick} />
      </S.Content>
    </S.FindUserIdPasswordWrapper>
  );
};
