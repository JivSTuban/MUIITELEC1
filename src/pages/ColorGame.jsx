import { Container, Grid, Stack } from '@mui/material';
import React from 'react';
import MyStack from '../components/MyStack';
import MyButton from '../components/MyButton';

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

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const shuffleArray = (array) => {
  let shuffledArray = array.slice(); 
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};


const ColorGame = () => {
  const handleClick = () =>{
    
  }

  const shuffledColors = shuffleArray(colors);

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
        {shuffledColors.map((color, index) => (
          <MyStack key={index} bg={color} />
        ))}
      </Stack>
      <Grid container spacing={1}>
        <MyButton handleClick={handleClick()} />
        <MyButton handleClick={handleClick()} />
        <MyButton handleClick={handleClick()} />

        <MyButton handleClick={handleClick()} />
        <MyButton handleClick={handleClick()} />
        <MyButton handleClick={handleClick()} />

        <MyButton handleClick={handleClick()} />
        <MyButton handleClick={handleClick()} />
        <MyButton handleClick={handleClick()} />
      </Grid>
    </Container>
  );
};

export default ColorGame;
