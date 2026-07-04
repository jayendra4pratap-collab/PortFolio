import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Project from "./pages/project";
import ScrollToTop from "./components/scrollToTop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
