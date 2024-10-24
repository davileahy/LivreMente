import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll para o topo
  }, [pathname]); // Chama toda vez que a rota mudar

  return null; // Não precisa renderizar nada
};

export default ScrollToTop;
