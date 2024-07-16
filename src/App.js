import { Container } from "@mui/material";
import { Box } from "@mui/system";
import About from "./components/About";
import Contact from "./components/Contact";
import FindMore from "./components/FindMore";
import { useEffect } from "react";

import Hero from "./components/Hero";

import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    document.title = "Harish";
  }, []);
  return (
    <Container maxWidth="md">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Hero />

        <About />

        <Skills />

        <Contact />

        <FindMore />
      </Box>
    </Container>
  );
}

export default App;
