import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recommend" element={<div>recommend</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
