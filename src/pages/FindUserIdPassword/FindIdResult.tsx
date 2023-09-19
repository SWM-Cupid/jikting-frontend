import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { theme } from 'styles/theme';

export const FindIdResult = ({ findIdResult }: { findIdResult: string }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/normallogin');
  };

  const handleFindPasswordClick = () => {
    navigate('/finduseridpassword', { state: { findType: 'password' } });
  };

  return (
    <S.FindIdResultWrapper>
      <S.Result>회원님의 아이디는 {findIdResult} 입니다.</S.Result>
      <Button title="로그인" onClick={handleLoginClick} background={theme.colors.mainPink} />
      <Button title="비밀번호 찾기" onClick={handleFindPasswordClick} background={theme.colors.mainPink} />
    </S.FindIdResultWrapper>
  );
};
