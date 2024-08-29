import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function MyStack({bg}) {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Item sx={{ bgcolor: bg, width:'20px', height:'20px'}} ></Item>
      </Stack>
    </div>
  );
}