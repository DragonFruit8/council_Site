import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path=
         element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
