import { MainLayout } from '@components/layout';
import * as React from 'react';
import {Box, Typography} from '@mui/material'


export default function About() {
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
          About Page
      </Typography>
  </Box>
  );
}

About.Layout = MainLayout


