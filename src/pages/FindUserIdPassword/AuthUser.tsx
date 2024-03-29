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
import { Modal } from 'components/Modal';
import { theme } from 'styles/theme';
import { useModal } from 'hooks/useModal';

export interface UserInfo {
  username: string;
  name: string;
  phone: string;
  verificationCode: string;
}

export const AuthUser = ({
  findType,
  setUsername,
  moveNextStep,
}: {
  findType: string;
  setUsername: (username: string) => void;
  moveNextStep: (nextStep: string, result?: string) => void;
}) => {
  const [isSendCode, setIsSendCode] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const [modalMessage, setModalMessage] = useState('');

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

    setUsername(data.username);
    checkVerificationCode(data.phone, data.verificationCode);
  };

  const showErrorMessage = (message: string) => {
    openModal();
    setModalMessage(message);
  };

  const sendCode = async (data: UserInfo) => {
    if (findType === 'id') {
      const isValidUserInfo = await fetchFindIdSendCode(data);
      if (isValidUserInfo) {
        setIsSendCode(true);
        return;
      }
    }

    if (findType === 'password' && (await fetchFindPasswordSendCode(data))) {
      setIsSendCode(true);
      return;
    }

    showErrorMessage('사용자 정보를 찾을 수 없습니다.');
  };

  const checkVerificationCode = async (phone: UserInfo['phone'], verificationCode: UserInfo['verificationCode']) => {
    if (findType === 'id') {
      const findIdResult = await fetchFindIdVerificationCode(phone, verificationCode);
      if (typeof findIdResult === 'string') {
        moveNextStep('FindIdResult', findIdResult);
        return;
      }
    }

    if (findType === 'password' && (await fetchFindPasswordVerificationCode(phone, verificationCode))) {
      moveNextStep('FindPasswordResult');
      return;
    }

    showErrorMessage('인증번호가 일치하지 않습니다.');
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
      {isOpen ? <Modal title={modalMessage} handleButtonClick={closeModal} /> : null}
    </S.FlexColumn>
  );
};
