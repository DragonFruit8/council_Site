// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
    <Navbar />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
