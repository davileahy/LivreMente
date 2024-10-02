import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import MorePage from './pages/MorePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inicio" element={<MainPage />} />
        <Route path="/saiba_mais" element={<MorePage />} />
        {/* Adicionar outras rotas para diferentes páginas */}
      </Routes>
    </Router>
  );
}

export default App;
