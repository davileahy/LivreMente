import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MorePage from "./pages/MorePage";
import AllCoursesPage from "./pages/AllCoursesPage";
import LibraryPage from "./pages/LibraryPage";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} index/>
          <Route path="/inicio" element={<MainPage />} />
          <Route path="/saiba_mais" element={<MorePage />} />
          <Route path="/cursos" element={<AllCoursesPage />} />
          <Route path="/biblioteca" element={<LibraryPage />} />
          {/* Adicionar outras rotas para diferentes páginas */}
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
