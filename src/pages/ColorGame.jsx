import { Container } from '@mui/material';
import React from 'react';

const ColorGame = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Adjust height to ensure vertical centering
        //border: '1px solid red', // Optional: for visual debugging
      }}
    >
      ColorGame
    </Container>
  );
};

export default ColorGame;
