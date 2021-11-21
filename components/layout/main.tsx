
import { LayoutProps } from '@models/index';

import * as React from 'react';
import Link from 'next/link'
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import Menu from '@components/common/menu/menu';
import Navbar from '@components/common/nav';



export function MainLayout ({children}:  LayoutProps) {
  return (
    <Stack 
      minHeight="100vh" 
      direction="row" 
      spacing={3} 
      justifyContent="flex-start"
      bgcolor="primary.main"
    >
      <Menu />
      <Box component="main">
          <Navbar />

          <Box>{children}</Box>
			</Box>

    </Stack>
  );
}
