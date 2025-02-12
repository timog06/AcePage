import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Rules from './pages/Rules';
import Comparison from './pages/Comparison';
import About from './pages/About';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Toaster
          position="top-center"
          containerStyle={{
            top: 80
          }}
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/about" element={<About />} />
          </Routes>

          {/* Footer */}
          <footer className="footer">
          <div className="footer-left-group">
            <div className="footer-left">
              <img src="/AcePage/trade-fed.png" alt="Trade Federation" />
              <div className="footer-text">
                <span>FUNDED BY</span>
                <span>THE TRADE FEDERATION</span>
                <span>support@tradefed.com</span>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-center">
              <Link to="/">Home</Link>
              <Link to="stats">Statistics</Link>
              <Link to="rules">Rules</Link>
              <Link to="about">About</Link>
            </div>
          </div>
          <div className="footer-right">
            © 2025 Ace Studios •
            <Link to="terms">Terms</Link> •
            <Link to="privacy">Privacy</Link> •
            <Link to="cookies">Cookies</Link>
          </div>
          </footer>
        </main>

      </div>
    </Router>
  );
}

export default App;
