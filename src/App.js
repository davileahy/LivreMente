import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Adicionar outras rotas para diferentes páginas */}
      </Routes>
    </Router>
  );
}

export default App;
