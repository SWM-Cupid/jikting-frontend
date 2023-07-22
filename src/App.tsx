import { Test } from 'Test';
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
