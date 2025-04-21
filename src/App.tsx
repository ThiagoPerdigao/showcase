import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Banner from "./components/banner";
import SkillsSection from "./components/SkillsSec";
import Featured from "./components/featuredProject";
import Projects from "./components/projects";
import Ezsnack from "./pages/ezsnack";
import Angher from "./pages/angher"; // Importe a nova página
import Footer from "./components/footer";

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
                {/* Adicionamos mt-16 (64px) para desktop e mt-12 (48px) para mobile */}
                <section id="banner" className="mt-12 md:mt-16">
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
                <Footer />
              </>
            }
          />
          <Route path="/ezsnack" element={<Ezsnack />} />
          <Route path="/angher" element={<Angher />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;