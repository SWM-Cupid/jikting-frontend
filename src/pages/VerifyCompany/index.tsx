import { Header } from 'components/Header';
import { VerifyEmailWrapper } from './style';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { validEmailCheck } from 'validation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface VerfiyForm {
  email: string;
  verifyCode: number;
}

export const VerifyCompany = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<VerfiyForm>();
  const [isSendCode, setIsSendCode] = useState(false);

  const onSubmit = (formData: VerfiyForm) => {
    if (!isSendCode) {
      // TODO: api연동
      setIsSendCode(true);
    }
  };

  return (
    <VerifyEmailWrapper onSubmit={handleSubmit(onSubmit)}>
      <Header title="회사 인증" previous />
      {isSendCode && <Input title="인증번호" {...register('verifyCode', { required: true })}></Input>}
      <Input
        title="회사 이메일"
        error={errors.email}
        {...register('email', { required: true, validate: validEmailCheck })}
      ></Input>

      {isSendCode ? (
        <Button
          title="인증완료"
          onClick={() => alert('ho')}
          background={isValid ? theme.colors.mainPink : theme.colors.buttonGrey}
        ></Button>
      ) : (
        <Button
          type="submit"
          title="인증하기"
          background={isValid ? theme.colors.mainPink : theme.colors.buttonGrey}
        ></Button>
      )}
    </VerifyEmailWrapper>
  );
};
