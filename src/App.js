import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Awards from './components/Awards';
import Movies from './components/Movies';
import Contact from './components/Contact';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-film-primary text-white font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Awards />
              <Movies />
            </>
          } />
          <Route path="/awards" element={<Awards fullPage />} />
          <Route path="/movies" element={<Movies fullPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;