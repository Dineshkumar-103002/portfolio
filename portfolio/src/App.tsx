import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/aboutMe";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#181e29]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
