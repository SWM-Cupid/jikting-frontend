import { Header } from 'components/Header';
import * as S from './style';
import { Input } from 'components/Input';
import { useForm } from 'react-hook-form';
import { validPasswordCheck } from 'validation';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { useState } from 'react';
import ModalPortal from 'components/Modal/ModalPortal';
import { Modal } from 'components/Modal';
import { useNavigate } from 'react-router-dom';
import { fetchEditPassword } from 'api/mypage';

export interface SubmitData {
  password: string;
  newPassword: string;
  newPasswordCheck?: string;
}

export const EditPassword = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<SubmitData>({ defaultValues: {}, mode: 'onTouched' });
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const handleModalClose = () => {
    if (modalMessage === '비밀번호 변경이 완료되었습니다.') {
      setOpenModal(false);
      navigate('/mypage');
      return;
    }
    setOpenModal(false);
  };

  const onSubmit = async (data: SubmitData) => {
    delete data.newPasswordCheck;
    try {
      await fetchEditPassword(data);
      setModalMessage('비밀번호 변경이 완료되었습니다.');
    } catch {
      setModalMessage('기존 비밀번호가 일치하지 않습니다.');
    } finally {
      setOpenModal(true);
    }
  };
  return (
    <S.EditPasswordWrapper>
      <Header previous title="비밀번호 변경" />
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input title="기존 비밀번호" type="password" {...register('password')} />
        <Input
          title="새 비밀번호"
          type="password"
          error={errors.newPassword}
          {...register('newPassword', {
            required: true,
            validate: {
              validPasswordCheck,
              dupulicatedPasswordCheck: (input) => {
                const oldPassword = getValues('password');
                if (oldPassword === input) return '기존 비밀번호와 동일합니다.';
              },
            },
          })}
        />
        <Input
          title="새 비밀번호 확인"
          type="password"
          {...register('newPasswordCheck', {
            required: true,
            validate: {
              passwordCheck: (input) => {
                const password = getValues('newPassword');
                if (password !== input) return '비밀번호가 일치하지 않습니다.';
              },
            },
          })}
        />
        <Button title="확인" background={isValid ? theme.colors.mainPink : '#CCCCCC'} />
      </S.Form>
      {openModal ? (
        <ModalPortal>
          <Modal title={modalMessage} handleButtonClick={handleModalClose}></Modal>
        </ModalPortal>
      ) : null}
    </S.EditPasswordWrapper>
  );
};