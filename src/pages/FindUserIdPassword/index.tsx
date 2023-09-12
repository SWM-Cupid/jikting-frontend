import * as S from './style';
import { useState } from 'react';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { AuthUser } from './AuthUser';
import { useLocation } from 'react-router-dom';

export const FindUserIdPassword = () => {
  const [step, setStep] = useState<string>('AuthUser');
  const { findType } = useLocation().state;
  /* TODO - handleButtonClick
   * "인증번호 전송": 폼 채워져 있는지 확인하고 인증번호 요청
   * "다음": 입력한 인증번호 확인 후 성공 혹은 실패 동작 수행
   */

  return (
    <>
      {step === 'AuthUser' && <AuthUser findType={findType} />}
      {step === 'FindIdResult'}
      {step === 'FindPasswordResult'}
    </>
  );
};

export const FindIdResult = () => {
  const handleLoginClick = () => {
    // TODO: 로그인 화면으로 이동
  };

  const handleFindPasswordClick = () => {
    // TODO: 비밀번호 찾기 화면으로 이동
  };
  // TODO: 아이디 받아오는 기능 추가
  return (
    <S.FlexColumn>
      <S.Content>
        <Button title="로그인" onClick={handleLoginClick} />
        <Button title="비밀번호 찾기" onClick={handleLoginClick} />
      </S.Content>
    </S.FlexColumn>
  );
};

export const FindPasswordResult = () => {
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewPassword(e.currentTarget.value);
  };

  const handleCheckPasswordBlur = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== newPassword) {
      // TODO: 에러 메시지 띄우기
    }
  };

  const handleChangePasswordClick = () => {
    // TODO: 비밀번호 확인에서 에러가 발생하지 않는 경우 새 비밀번호 전송
  };
  return (
    <S.FlexColumn>
      <S.Content>
        <Input title="새 비밀번호" onChange={handlePasswordChange} value={newPassword} />
        <Input title="새 비밀번호 확인" onBlur={handleCheckPasswordBlur} />
        <Button title="다음" onClick={handleChangePasswordClick} />
      </S.Content>
    </S.FlexColumn>
  );
};
