// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/HomePage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import ResumePage from './components/ResumePage.jsx';
import SourdoughPage from './components/SourdoughPage.jsx';
import SteakPage from './components/SteakPage.jsx';
import styles from './App.module.css'; // Import new styles

function App() {
  return (
    <div>
      <Navbar />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/sourdough" element={<SourdoughPage />} />
          <Route path="/steak" element={<SteakPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App