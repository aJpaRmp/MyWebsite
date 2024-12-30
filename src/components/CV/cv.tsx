import Header from "./Header/header.jsx";
import Education from "./Main/Education/education.jsx";
import Experience from "./Main/Experience/experience.jsx";
import Certificates from "./Main/Certificates/certificates.jsx";
import Interests from "./Main/Interests/interests.jsx";
import Language from "./Main/Language/language.jsx";
import Project from "./Main/Project/project.jsx";
import Skills from "./Main/Skills/skills.jsx";
import Footer from "./Footer/footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="d-flex flex-wrap w-100">
        <div className="d-flex flex-column w-50">
          <Education />
          <Certificates />
          <div className="d-flex w-100">
            <Language />
            <Interests />
          </div>
        </div>
        <Experience />
        <Skills />
        <Project />
      </main>
      <Footer />
    </>
  );
};

export default App;
