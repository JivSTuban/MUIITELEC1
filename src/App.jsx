import { Box, Container } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BabyPictures from './pages/BabyPictures';
import MyHome from './pages/MyHome';
import ColorGame from './pages/ColorGame';

function App() {
  return (
    <Router>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/pictures" element={<BabyPictures />} />
          <Route path="/color-game" element={<ColorGame />} />
          <Route path="/" element={<MyHome />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
