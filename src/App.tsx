import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/aboutMe";
import Skills from "./pages/skills";
import Project from "./pages/Project";
import Contact from "./pages/contact";
import MyStory from "./pages/myStory";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Project />
        <MyStory />
        <Contact />
      </main>
    </>
  );
}

export default App;
