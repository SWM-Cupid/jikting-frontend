import { Button, ImageButton } from 'components/Button';
import kakao_login from 'assets/images/kakao_login.png';
import jikting from 'assets/images/jikting.png';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

export const SelectLogin = () => {
  const navigate = useNavigate();

  const handleKakaoLoginClick = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/oauth2/authorization/kakao`;
  };

  const handleNormalLogin = () => {
    navigate('/normallogin');
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
      <S.LogoWrapper>
        <S.Logo src={jikting} width="200px" height="280px" />
      </S.LogoWrapper>
      <S.ButtonWrapper>
        <ImageButton onClick={handleKakaoLoginClick}>
          <img src={kakao_login} width="300px" height="45px"></img>
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
