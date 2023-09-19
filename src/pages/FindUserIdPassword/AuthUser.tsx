import { Button } from 'components/Button';
import * as S from './style';
import { Header } from 'components/Header';
import { Input } from 'components/Input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validIdCheck, validNameCheck, validPhoneNumberCheck } from 'validation';
import {
  fetchFindIdSendCode,
  fetchFindIdVerificationCode,
  fetchFindPasswordSendCode,
  fetchFindPasswordVerificationCode,
} from 'api/findUserInfo';
import ModalPortal from 'components/Modal/ModalPortal';
import { Modal } from 'components/Modal';
import { theme } from 'styles/theme';

export interface UserInfo {
  username: string;
  name: string;
  phone: string;
  verificationCode: string;
}

export const AuthUser = ({
  findType,
  moveNextStep,
}: {
  findType: string;
  moveNextStep: (nextStep: string) => void;
}) => {
  const [isSendCode, setIsSendCode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserInfo>();

  const onSubmit = async (data: UserInfo) => {
    if (!isSendCode) {
      sendCode(data);
      return;
    }

    checkVerificationCode(data.phone, data.verificationCode);
  };

  const sendCode = async (data: UserInfo) => {
    if (findType === 'id') {
      setIsSendCode(await fetchFindIdSendCode(data));
    } else if (findType === 'password') {
      setIsSendCode(await fetchFindPasswordSendCode(data));
    }
  };

  const checkVerificationCode = async (phone: UserInfo['phone'], verificationCode: UserInfo['verificationCode']) => {
    if (findType === 'id' && (await fetchFindIdVerificationCode(phone, verificationCode))) {
      moveNextStep('FindIdResult');
      return;
    } else if (findType === 'password' && (await fetchFindPasswordVerificationCode(phone, verificationCode))) {
      moveNextStep('FindPasswordResult');
      return;
    }

    setModalOpen(true);
  };

  const handleCloseModalClick = () => {
    setModalOpen(false);
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
        <Button
          type="submit"
          title={isSendCode ? '다음' : '인증번호 전송'}
          background={isValid ? theme.colors.mainPink : '#CCCCCC'}
        />
      </S.Form>
      {modalOpen ? (
        <ModalPortal>
          <Modal title="인증번호가 일치하지 않습니다." handleButtonClick={handleCloseModalClick} />
        </ModalPortal>
      ) : null}
    </S.FlexColumn>
  );
};
