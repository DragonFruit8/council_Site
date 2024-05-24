import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
    <
        <Route path="/" component={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
