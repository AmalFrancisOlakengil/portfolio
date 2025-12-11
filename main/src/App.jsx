// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber'; 

import Navbar from './components/Navbar';
import RotatingModelScene from './components/RotatingModel'; 

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css'; 

// Animation variant for smooth page transition
const pageVariants = {
  initial: { opacity: 0, x: "100%" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" }
};

const PageTransitionWrapper = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="in"
    exit="out"
    transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
    className="page-content"
  >
    {children}
  </motion.div>
);

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      
      <div className="layout-container">
        
        {/* Left Column: Page Content */}
        <div className="content-wrapper">
             {/* New wrapper for absolute pages to correctly calculate height */}
             <div className="page-transition-area">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PageTransitionWrapper><Home /></PageTransitionWrapper>} />
                        <Route path="/about" element={<PageTransitionWrapper><About /></PageTransitionWrapper>} />
                        <Route path="/projects" element={<PageTransitionWrapper><Projects /></PageTransitionWrapper>} />
                        <Route path="/contact" element={<PageTransitionWrapper><Contact /></PageTransitionWrapper>} />
                    </Routes>
                </AnimatePresence>
             </div>
        </div>
        
        {/* Right Column: Rotating 3D Model */}
        <div className="visualization-wrapper">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="rotating-canvas">
            <RotatingModelScene />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}