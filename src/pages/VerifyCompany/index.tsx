import { Header } from 'components/Header';
import { VerifyEmailWrapper } from './style';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { validEmailCheck } from 'validation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { fetchSendEmailCode, fetchVerifyEmailCode } from 'api/mypage';
import { useNavigate } from 'react-router-dom';

interface VerfiyForm {
  email: string;
  verificationCode: number;
}

export const VerifyCompany = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<VerfiyForm>();
  const [isSendCode, setIsSendCode] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (formData: VerfiyForm) => {
    if (!isSendCode) {
      fetchSendEmailCode(formData.email);
      setIsSendCode(true);
      return;
    }

    if (await fetchVerifyEmailCode(formData.email, formData.verificationCode)) {
      alert('회사인증 완료');
      navigate('/mypage');
    } else {
      setError('verificationCode', { type: 'value', message: '인증번호가 일치하지 않습니다.' });
    }
  };

  return (
    <VerifyEmailWrapper onSubmit={handleSubmit(onSubmit)}>
      <Header title="회사 인증" previous />
      {isSendCode && (
        <Input
          title="인증번호"
          error={errors.verificationCode}
          animate={'bottomUp'}
          {...register('verificationCode', { required: true })}
        ></Input>
      )}
      <Input
        title="회사 이메일"
        error={errors.email}
        {...register('email', { required: true, validate: validEmailCheck })}
      ></Input>

      <Button
        type="submit"
        title={isSendCode ? '인증완료' : '인증하기'}
        background={isValid ? theme.colors.mainPink : theme.colors.buttonGrey}
      ></Button>
    </VerifyEmailWrapper>
  );
};
