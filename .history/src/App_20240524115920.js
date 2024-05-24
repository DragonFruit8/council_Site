import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ParallaxHomePage from './components/ParallaxHomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <ParallaxHomePage />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
