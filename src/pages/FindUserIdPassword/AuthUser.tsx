import { Button } from 'components/Button';
import * as S from './style';
import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validIdCheck, validNameCheck, validPhoneNumberCheck } from 'validation';
import { fetchFindIdSendCode } from 'api/findUserInfo';

export interface UserInfo {
  username: string;
  name: string;
  phone: string;
  verificationCode: string;
}

export const AuthUser = ({ findType }: { findType: string }) => {
  const [isSendCode, setIsSendCode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>();

  const onSubmit = (data: UserInfo) => {
    if (!isSendCode) {
      sendCode(data);
      return;
    }
  };

  const sendCode = async (data: UserInfo) => {
    if (findType === 'password') {
      return setIsSendCode(await fetchFindIdSendCode(data));
    }

    return setIsSendCode(await fetchFindIdSendCode(data));
  };

  return (
    <S.FlexColumn>
      <Header previous />
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        {isSendCode ? <Input title="인증번호" {...register('verificationCode', { required: true })} /> : null}
        {findType === 'password' ? (
          <Input title="아이디" {...register('username', { required: true, validate: { validIdCheck } })} />
        ) : null}
        <Input
          title="이름"
          error={errors.name}
          {...register('name', { required: true, validate: { validNameCheck } })}
        />
        <Input
          title="휴대폰 번호"
          error={errors.phone}
          {...register('phone', { required: true, validate: { validPhoneNumberCheck } })}
        />
        <Button type="submit" title={isSendCode ? '다음' : '인증번호 전송'} />
      </S.Form>
    </S.FlexColumn>
  );
};
