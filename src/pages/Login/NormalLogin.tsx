import { Header } from 'components/Header';
import * as S from './style';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { useForm } from 'react-hook-form';
import { validIdCheck, validPasswordCheck } from 'validation';
import { useMutationLogin } from 'hooks/useLoginQuery';
import { useNavigate } from 'react-router-dom';

export const NormalLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const { mutateAsync } = useMutationLogin();
  const navigate = useNavigate();

  const handleLoginClick = async (data: { [key: string]: string }) => {
    const { username, password } = data;
    try {
      await mutateAsync({ username, password });
      navigate('/team');
    } catch {
      // TODO: 로그인 실패 Modal 창 띄우기
      console.log('로그인 실패');
    }
  };

  const handleFindIdClick = () => {
    // TODO: 아이디 찾기 페이지로 이동
  };

  const handleFindPasswordClick = () => {
    // TODO: 비밀번호 찾기 페이지로 이동
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
    </S.LoginWrapper>
  );
};
