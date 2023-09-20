import About from "./components/About";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Language from "./components/Language";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Sidenav />
      <Language />
      <Main />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Connect />
    </div>
  );
}

export default App;
