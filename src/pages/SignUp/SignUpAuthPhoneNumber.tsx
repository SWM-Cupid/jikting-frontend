import { Button } from 'components/Button';
import { Input } from 'components/Input';

interface Props {
  isSendCode: boolean;
  handleSignUpClick(): void;
  handleUserInfoChange(e: React.FormEvent<HTMLInputElement>): void;
}

export const SignUpAuthPhoneNumber = ({ isSendCode, handleSignUpClick, handleUserInfoChange }: Props) => {
  return (
    <>
      {isSendCode ? <Input title="인증번호" name="user" onChange={handleUserInfoChange} /> : null}
      <Input title="이름" name="userName" onChange={handleUserInfoChange} />
      <Input title="휴대폰 번호" name="userPhoneNumber" onChange={handleUserInfoChange} />
      <Button title={isSendCode ? '회원가입 완료' : '인증번호 전송'} onClick={handleSignUpClick} />
    </>
  );
};
