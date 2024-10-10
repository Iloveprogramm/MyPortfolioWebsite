import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Education } from "./components/Education";
import { About } from "./components/About";
import { ProjectDetails } from './components/ProjectDetails';
import { IndustryExperience } from './components/IndustryExperience';

function App() {
  const location = useLocation(); // 获取当前路径
  const isDetailPage = location.pathname.startsWith('/projects/'); // 判断是否是详情页

  return (
    <>
      {!isDetailPage && <NavBar />}  {/* 如果不是项目详情页，显示导航栏 */}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Banner />
              <About />
              <Education />
              <IndustryExperience />
              <Skills />
              <Projects />
              <Contact />
            </>
          } 
        />
        {/* 单独页面 */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects/:id" element={<ProjectDetails />} /> {/* 详情页 */}
      </Routes>
      {!isDetailPage && <Footer />} {/* 如果不是项目详情页，显示页脚 */}
    </>
  );
}


export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
