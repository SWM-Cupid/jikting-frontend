import { Header } from 'components/Header';
import * as S from './style';
import { NavBar } from 'components/NavBar';
import RightArrow from 'assets/images/rightarrow.svg';

export const Mypage = () => {
  return (
    <S.MyPageWrapper>
      <Header title="마이페이지" />

      <S.ProfileImage src="src/assets/images/karina.jpeg" />

      <S.MenuItem>
        <S.MenuTitle>닉네임</S.MenuTitle>
        <S.MenuContentWrapper>
          <S.MenuContent>리나</S.MenuContent>
          <RightArrow />
        </S.MenuContentWrapper>
      </S.MenuItem>

      <NavBar defaultActive="mypage" />
    </S.MyPageWrapper>
  );
};
