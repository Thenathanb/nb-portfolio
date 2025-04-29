import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer className="text-center py-4 text-gray-400 text-sm">
          © {new Date().getFullYear()} Nathan Bakare
        </footer>
      </Router>
    </div>
  );
}

export default App;
