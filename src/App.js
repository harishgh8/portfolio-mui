import { Container, Divider } from "@mui/material";
import { Box } from "@mui/system";
import About from "./components/About";
import Contact from "./components/Contact";
import FindMore from "./components/FindMore";

import Hero from "./components/Hero";

import Skills from "./components/Skills";

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Hero />
        <Divider variant="center" />
        <About />
        <Divider variant="center" />
        <Skills />
        <Divider variant="center" />
        <Contact />
        <Divider variant="center" />
        <FindMore />
        <Divider variant="center" />
      </Box>
    </Container>
  );
}

export default App;
