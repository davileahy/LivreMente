import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MorePage from "./pages/MorePage";
import AllCoursesPage from "./pages/AllCoursesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} index/>
        <Route path="/inicio" element={<MainPage />} />
        <Route path="/saiba_mais" element={<MorePage />} />
        <Route path="/cursos" element={<AllCoursesPage />} />
        {/* Adicionar outras rotas para diferentes páginas */}
      </Routes>
    </Router>
  );
}

export default App;
