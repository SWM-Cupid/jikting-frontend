import { Button, ImageButton } from 'components/Button';
import kakao_login from 'assets/images/kakao_login.png';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

export const SelectLogin = () => {
  const navigate = useNavigate();

  const handleKakaoLoginClick = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/oauth2/authorization/kakao`;
  };

  const handleNormalLogin = () => {
    navigate('/normalLogin');
  };

  const handleFindIdClick = () => {
    // TODO: 아이디 찾기 페이지로 이동
  };

  const handleFindPasswordClick = () => {
    // TODO: 비밀번호 찾기 페이지로 이동
  };

  const handleSignUpClick = () => {
    // TODO: 회원가입 페이지로 이동
  };
  return (
    <S.LoginWrapper>
      <div>Logo</div>
      <S.ButtonWrapper>
        <ImageButton onClick={handleKakaoLoginClick}>
          <img src={kakao_login}></img>
        </ImageButton>

        <S.NormalLoginButton onClick={handleNormalLogin}>직팅 로그인</S.NormalLoginButton>
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
      </S.ButtonWrapper>
    </S.LoginWrapper>
  );
};
