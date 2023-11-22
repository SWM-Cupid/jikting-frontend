import { ChatList } from 'pages/Chat';
import { EditNickName } from 'pages/EditNickName';
import { EditPassword } from 'pages/EditPassword';
import { EditProfile } from 'pages/EditProfile';
import { FindUserIdPassword } from 'pages/FindUserIdPassword';
import { Like } from 'pages/Like';
import { SelectLogin } from 'pages/Login';
import { NormalLogin } from 'pages/Login/NormalLogin';
import { Main } from 'pages/Main';
import { Mypage } from 'pages/Mypage';
import { SignUp } from 'pages/SignUp';
import { TeamList } from 'pages/Team';
import { InviteTeamLink } from 'pages/Team/InviteTeamLink';
import { VerifyCompany } from 'pages/VerifyCompany';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

const AppWrapper = styled.div`
  min-height: 100dvh;
  max-width: var(--app-max-width, 76.8rem);
  margin: 0 auto;
  background-color: white;
`;

const App = () => {
  useEffect(() => {
    const maxWidth = Math.min(768, innerWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth * 0.1}rem`);
  }, []);
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectLogin />} />
          <Route path="/main" element={<Main />} />
          <Route path="/normallogin" element={<NormalLogin />} />
          <Route path="/finduseridpassword" element={<FindUserIdPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/editnickname" element={<EditNickName />} />
          <Route path="/editpassword" element={<EditPassword />} />
          <Route path="/verifycompany" element={<VerifyCompany />} />
          <Route path="/team" element={<TeamList />} />
          <Route path="/invite" element={<InviteTeamLink />} />
          <Route path="/chat" element={<ChatList />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/like" element={<Like />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
