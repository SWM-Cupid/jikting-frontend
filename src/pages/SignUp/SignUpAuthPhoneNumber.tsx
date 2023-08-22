import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Form } from './style';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { validNameCheck, validPhoneNumberCheck } from 'validation';
import { fetchSendCode, fetchSignup, fetchVerificationCode } from 'api/signup';
import { UserInfo } from '.';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

interface Props {
  userInfo: UserInfo;
  updateUserInfo(data: { [userData: string]: string }): void;
}

export const SignUpAuthPhoneNumber = ({ userInfo, updateUserInfo }: Props) => {
  const [isSendCode, setIsSendCode] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const navigate = useNavigate();

  const sendCode = async (phone: string) => {
    setIsSendCode(await fetchSendCode(phone));
  };

  const onSubmit = async (data: { [key: string]: string }) => {
    if (!isSendCode) {
      sendCode(data.userPhoneNumber);
      return;
    }

    try {
      await fetchVerificationCode(data.userPhoneNumber, data.verificationCode);
      delete data.verificationCode;
      updateUserInfo(data);
      fetchSignup({ ...userInfo, ...data }).then(() => {
        alert('회원가입 완료되었습니다..!');
        navigate('/normallogin');
      });
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isSendCode ? <Input title="인증번호" error={errors.verificationCode} {...register('verificationCode')} /> : null}
      <Input
        title="이름"
        error={errors.userName}
        {...register('userName', { required: '이름 입력은 필수입니다.', validate: { validNameCheck } })}
      />
      <Input
        title="휴대폰 번호"
        error={errors.userPhoneNumber}
        {...register('userPhoneNumber', {
          required: '휴대폰 번호 입력은 필수 입니다.',
          validate: { validPhoneNumberCheck },
        })}
      />
      <Button type="submit" title={isSendCode ? '회원가입 완료' : '인증번호 전송'} background="#FF5680" />
    </Form>
  );
};
