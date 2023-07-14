import { Button } from 'components/Button';
import { Input } from 'components/Input';

interface Props {
  userInfo: {
    userId: string;
    userPassword: string;
    userNickName: string;
    userName: string;
    userPhoneNumber: string;
  };
  handleNextClick(): void;
  handleUserInfoChange(e: React.FormEvent<HTMLInputElement>): void;
}

export const SignUpIdPassword = ({ userInfo, handleUserInfoChange, handleNextClick }: Props) => {
  const handleCheckPasswordBlur = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== userInfo.userPassword) {
      // 에러 메시지 띄우기
      console.log('ERROR');
    }
  };
  return (
    <>
      <Input title="아이디" value={userInfo.userId} name="userId" onChange={handleUserInfoChange} />
      <Input
        type="password"
        value={userInfo.userPassword}
        title="비밀번호"
        name="userPassword"
        onChange={handleUserInfoChange}
      ></Input>
      <Input type="password" title="비밀번호 확인" name="userPasswordCheck" onBlur={handleCheckPasswordBlur}></Input>
      <Button title="다음" onClick={handleNextClick}></Button>
    </>
  );
};
