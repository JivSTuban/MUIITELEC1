import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Grid4 from '../components/Grid4'
import { Container } from '@mui/material'


const BabyPictures = () => {
  return (
    <Container maxWidth='xl' sx={{ mt:10 }}>
      <Breadcrumb />
      <Grid4 />
    </Container>
  )
}

export default BabyPictures