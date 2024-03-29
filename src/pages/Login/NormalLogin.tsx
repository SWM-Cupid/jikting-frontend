import { Header } from 'components/Header';
import * as S from './style';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { useForm } from 'react-hook-form';
import { validIdCheck, validPasswordCheck } from 'validation';
import { useMutationLogin } from 'hooks/useLoginQuery';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'components/Modal';
import { useModal } from 'hooks/useModal';

export const NormalLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const { mutateAsync } = useMutationLogin();
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();

  const handleLoginClick = async (data: { [key: string]: string }) => {
    (document.activeElement as HTMLElement).blur();
    const { username, password } = data;
    try {
      await mutateAsync({ username, password });
      navigate('/main');
    } catch {
      openModal();
    }
  };

  const handleFindIdClick = () => {
    navigate('/finduseridpassword', { state: { findType: 'id' } });
  };

  const handleFindPasswordClick = () => {
    navigate('/finduseridpassword', { state: { findType: 'password' } });
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <S.LoginWrapper>
      <Header title="로그인" previous />
      <S.Form onSubmit={handleSubmit(handleLoginClick)}>
        <Input
          placeholder="아이디를 입력해주세요"
          error={errors.username}
          {...register('username', { required: '아이디 입력은 필수 입니다.', validate: { validIdCheck } })}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          error={errors.password}
          {...register('password', { required: '비밀번호 입력은 필수 입니다.', validate: { validPasswordCheck } })}
        />
        <Button title="로그인" type="submit" size="large" background={theme.colors.mainPink}></Button>
      </S.Form>
      <S.SubButtonWrapper>
        <Button title="아이디 찾기" size="small" background="none" color="#666" onClick={handleFindIdClick}></Button>
        <S.DivideLine />
        <Button
          title="비밀번호 찾기"
          size="small"
          background="none"
          color="#666"
          onClick={handleFindPasswordClick}
        ></Button>
        <S.DivideLine />
        <Button title="회원가입" size="small" background="none" color="#666" onClick={handleSignUpClick}></Button>
      </S.SubButtonWrapper>
      {isOpen ? (
        <Modal title="아이디와 비밀번호를 확인해주세요" handleMaskClick={closeModal} handleButtonClick={closeModal} />
      ) : null}
    </S.LoginWrapper>
  );
};
