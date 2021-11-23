import { LayoutProps } from '@models/index';

import * as React from 'react';
import Link from 'next/link';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import Menu from '@components/common/menu/menu';
import Header from '@components/common/header/header';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack
      minHeight="100vh"
      direction="row"
      spacing={5}
      justifyContent="flex-start"
      bgcolor="primary.main"
    >
      <Box>
        <Menu />
      </Box>
      <Box component="main">
        <Header />

        <Box sx={{ml: "242px"}}>{children}</Box>
      </Box>
    </Stack>
  );
}
