import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage'
import 

function App() {
  return (

      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/issues" element={<AboutPage />} />
        </Routes>
      </Router>

  );
}

export default App;
