import { LayoutProps } from '@models/common';
import { Box } from '@mui/system';
import * as React from 'react';
import { ROUTE_LIST } from './routes';
import Link from 'next/link'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Typography } from '@mui/material';
import Image from 'next/image'
import logo from '../../../images/logo-mp3.jpg';

export default function Menu () {
  return (
    <Box >
      
      <Box>
        {ROUTE_LIST.map(route => (
           
          <Link key={route.path} href={route.path}  passHref>
            <Box sx={{
              fontWeight: "500"
            }}  color="secondary.main" >{route.label}</Box>
           
          </Link>
        ))}
      </Box>
    </Box>

   
  );
}
