import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Banner from "./components/banner";
import SkillsSection from "./components/SkillsSec";
import Featured from "./components/featuredProject";
import Projects from "./components/projects";
import Ezsnack from "./pages/ezsnack";
import Angher from "./pages/angher"; // Importe a nova página

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen overflow-x-hidden">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="banner">
                  <Banner />
                </section>
                <section id="SkillsSection">
                  <SkillsSection />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="Featured">
                  <Featured />
                </section>
              </>
            }
          />
          <Route path="/ezsnack" element={<Ezsnack />} />
          <Route path="/angher" element={<Angher />} /> {/* Nova rota */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;