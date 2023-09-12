import { Header } from 'components/Header';
import * as S from './style';
import { NavBar } from 'components/NavBar';
import RightArrow from 'assets/images/rightarrow.svg';
import { useQueryMyInfo } from 'hooks/useMypageQuery';
import { useNavigate } from 'react-router-dom';

export const Mypage = () => {
  const data = useQueryMyInfo();
  const navigate = useNavigate();

  const handleProfileEditClick = () => {
    navigate('/editprofile');
  };

  const handleChangePasswordClick = () => {
    navigate('/editpassword');
  };

  const handleNickNameEditClick = () => {
    if (data) {
      navigate('/editnickname', { state: { nickname: data.nickname } });
    }
  };

  if (data) {
    const { nickname, company, imageUrl } = data;
    return (
      <S.MyPageWrapper>
        <Header title="마이페이지" />

        <S.ProfileImage src={imageUrl} />

        <S.MenuItemWrapper>
          <S.MenuItem onClick={handleNickNameEditClick}>
            <S.MenuTitle>닉네임</S.MenuTitle>
            <S.MenuContentWrapper>
              <S.MenuContent>{nickname}</S.MenuContent>
              <RightArrow />
            </S.MenuContentWrapper>
          </S.MenuItem>

          <S.MenuItem>
            <S.MenuTitle>회사</S.MenuTitle>
            <S.MenuContentWrapper>
              <S.MenuContent>{company}</S.MenuContent>
              <RightArrow />
            </S.MenuContentWrapper>
          </S.MenuItem>

          <S.MenuItem onClick={handleProfileEditClick}>
            <S.MenuTitle>프로필 정보 수정</S.MenuTitle>
            <S.MenuContentWrapper>
              <RightArrow />
            </S.MenuContentWrapper>
          </S.MenuItem>

          <S.MenuItem onClick={handleChangePasswordClick}>
            <S.MenuTitle>비밀번호 변경</S.MenuTitle>
            <S.MenuContentWrapper>
              <RightArrow />
            </S.MenuContentWrapper>
          </S.MenuItem>

          <S.MenuItem>
            <S.MenuTitle>로그아웃</S.MenuTitle>
            <S.MenuContentWrapper>
              <RightArrow />
            </S.MenuContentWrapper>
          </S.MenuItem>

          <S.MenuItem>
            <S.MenuTitle>회원탈퇴</S.MenuTitle>
            <S.MenuContentWrapper>
              <RightArrow />
            </S.MenuContentWrapper>
          </S.MenuItem>
        </S.MenuItemWrapper>

        <NavBar defaultActive="mypage" />
      </S.MyPageWrapper>
    );
  }
};
