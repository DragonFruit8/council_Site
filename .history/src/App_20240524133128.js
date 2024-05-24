import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage'

function App() {
  return (

      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
      </Router>

  );
}

export default App;
