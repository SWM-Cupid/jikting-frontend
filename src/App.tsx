import { Test } from 'Test';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

const AppWrapper = styled.div`
  min-height: 100dvh;
  max-width: var(--app-max-width, 76.8rem);
  margin: 0 auto;
  padding-bottom: 4rem;
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
          <Route path="/recommend" element={<div>recommend</div>} />
          <Route path="/" element={<Test></Test>} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
