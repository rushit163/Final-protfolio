import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import ParallaxComponent from "./components/Parallax/Parallax";
import Technologies from "./components/Technologies/Technologies";
import Playground from "./components/Playground/Playground";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import { Header } from "./components/Header/Header";

function App() {

  const [open, setOpen] = useState(true);

  const toggleHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          {!open && <Header />}
          <Navbar />
          <Home />
          <Projects />
          <About />
          <ParallaxComponent />
          <Technologies />
          <Playground />
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
