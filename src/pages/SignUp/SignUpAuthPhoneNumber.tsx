import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Form } from './style';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { validNameCheck, validPhoneNumberCheck } from 'validation';
import { fetchSendCode, fetchVerificationCode } from 'api/signup';

interface Props {
  userInfo: {
    userId: string;
    userPassword: string;
    userNickName: string;
    userName: string;
    userPhoneNumber: string;
    userGender: string;
  };
  updateUserInfo(data: { [userData: string]: string }): void;
}

export const SignUpAuthPhoneNumber = ({ userInfo, updateUserInfo }: Props) => {
  const [isSendCode, setIsSendCode] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const sendCode = async (phone: string) => {
    setIsSendCode(await fetchSendCode(phone));
  };

  const onSubmit = (data: { [key: string]: string }) => {
    if (!isSendCode) {
      sendCode(data.userPhoneNumber);
      return;
    }

    fetchVerificationCode(data.verificationCode)
      .then(() => {
        delete data.verificationCode;
        updateUserInfo(data);
      })
      .catch(({ response }) => {
        errors.verificationCode = response.message;
      });

    // TODO: 회원가입
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
