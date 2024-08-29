import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function MyButton({handleClick}) {
  return (

      <Grid item xs={12} sm={4}>
        <Box 
          sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2, height:'50px' }}
          onClick={handleClick}
        >
          
        </Box>
      </Grid>
  );
}