import { Input } from 'components/Input';
import * as S from './style';
import { Button } from 'components/Button';
import { fetchResetPassword } from 'api/findUserInfo';
import { useForm } from 'react-hook-form';
import { validPasswordCheck } from 'validation';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'components/Modal';
import { theme } from 'styles/theme';
import { useModal } from 'hooks/useModal';

interface Password {
  password: string;
  passwordCheck: string;
}

export const FindPasswordResult = ({ username }: { username: string }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<Password>();
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();

  const handleCloseModalClick = () => {
    closeModal();
    navigate('/');
  };

  const onSubmit = async (data: Password) => {
    await fetchResetPassword(username, data.password);
    openModal();
  };

  return (
    <S.FindPasswordWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="password"
        error={errors.password}
        title="새 비밀번호"
        {...register('password', { required: '비밀번호 입력은 필수입니다.', validate: validPasswordCheck })}
      />
      <Input
        type="password"
        error={errors.passwordCheck}
        title="새 비밀번호 확인"
        {...register('passwordCheck', {
          required: '비밀번호 체크 입력은 필수입니다.',
          validate: {
            check: (input) => {
              const password = getValues('password');
              if (password !== input) return '비밀번호가 일치하지 않습니다.';
            },
          },
        })}
      />
      <Button type="submit" title="다음" background={isValid ? theme.colors.mainPink : '#CCCCCC'} />
      {isOpen ? (
        <Modal title="비밀번호 변경이 완료되었습니다." handleButtonClick={handleCloseModalClick}></Modal>
      ) : null}
    </S.FindPasswordWrapper>
  );
};
