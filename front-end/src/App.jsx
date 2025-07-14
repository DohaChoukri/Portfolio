import Content from './components/content'
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import Resume from './components/resume'
import Projects from './components/projects'
import Contact from './components/contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Content />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            {/* <Route path="resume" element={<Resume />} /> */}
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
