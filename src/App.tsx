import { ChatList } from 'pages/Chat';
import { EditProfile } from 'pages/EditProfile';
import { SelectLogin } from 'pages/Login';
import { NormalLogin } from 'pages/Login/NormalLogin';
import { SignUp } from 'pages/SignUp';
import { TeamList } from 'pages/Team';
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
          <Route path="/main" element={<ChatList />} />
          <Route path="/normallogin" element={<NormalLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/teamlist" element={<TeamList />} />
          <Route path="/chatlist" element={<ChatList />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
