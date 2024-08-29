import { Container, Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import MyStack from '../components/MyStack';

const colors = [
  'primary.main',
  'secondary.main',
  'error.main',
  'warning.main',
  'info.main',
  'success.main',
  'text.primary',
  'text.secondary',
  'text.disabled'
];

const shuffleArray = (array) => {
  let shuffledArray = array.slice(); 
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ColorGame = () => {
  const [sequence, setSequence] = useState(shuffleArray(colors).slice(0, 9));
  const [revealedColors, setRevealedColors] = useState(Array(9).fill('primary.main'));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    const newRevealedColors = [...revealedColors];
    const correctColor = sequence[currentIndex];
    newRevealedColors[index] = colors[index];

    if (correctColor === newRevealedColors[index]) {
      setCurrentIndex(currentIndex + 1);

      if (currentIndex + 1 === sequence.length) {
        setRevealedColors(sequence);
        setTimeout(() => {
          alert('You won!');
          window.location.reload();
        }, 500);
      }
    } else {
      setCurrentIndex(0);
      setTimeout(() => {
        setRevealedColors(Array(9).fill('primary.main'));
      }, 500);
    }

    setRevealedColors(newRevealedColors);
  };

  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ flexWrap: 'wrap', justifyContent: 'center', marginBottom: 2 }}
      >
        {sequence.map((color, index) => (
          <MyStack key={index} bg={color} />
        ))}
      </Stack>
      <Grid container spacing={1}>
        {revealedColors.map((color, index) => (
          <MyButton 
            key={index} 
            handleClick={() => handleClick(index)} 
            bgColor={color} 
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ColorGame;
