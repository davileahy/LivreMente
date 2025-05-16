import { Box } from "@chakra-ui/react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />

      {/* Conteúdo principal */}
      <Box as="main" flex="1">
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
