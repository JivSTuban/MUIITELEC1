import { Box, Container } from '@mui/material';
import './App.css';
import Grid4 from './components/Grid4';
import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ width: '100%', mx: 'auto', mt: 6 }}>
        <Container maxWidth="xl">
          <Breadcrumb />
          <Grid4 />
        </Container>
      </Box>
    </>
  );
}

export default App;
