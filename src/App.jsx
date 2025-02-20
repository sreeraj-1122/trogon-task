import React from 'react'
import Hero from './components/Hero';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Modules from './pages/Modules';
import ModuleDetail from './pages/ModuleDetail';
import VideoDetail from './pages/VideoDetail';

const App = () => { 
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/subjects" element={<Home />} />
        <Route path="/subjects/:id" element={<Modules />} />
        <Route path="/modules/:moduleId" element={<ModuleDetail />} />
        <Route path="/video/:videoId" element={<VideoDetail />} />
      </Routes>
    </Router>
  );
};

export default App