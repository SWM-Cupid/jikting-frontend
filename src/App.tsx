import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

const AppWrapper = styled.div`
  height: 100dvh;
  max-width: var(--app-max-width, 76.8rem);
  margin: 0 auto;
  background-color: white;
`;

const App = () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/recommend" element={<div>recommend</div>} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
