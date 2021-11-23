import * as React from 'react';
import Link from 'next/link';
import { ROUTE_LIST } from './routes';
import AlbumIcon from '@mui/icons-material/Album';
import LibraryMusicTwoToneIcon from '@mui/icons-material/LibraryMusicTwoTone';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { CardMedia, List, ListItem } from '@mui/material';
import logo from '../../../images/logo-mp3.jpg';
import { Box } from '@mui/system';
export default function Menu() {

  return (
    <Box
      sx={{
        width: '242px',
        position: 'fixed',
        height: '100vh',
        
        zIndex: 3,
        bgcolor: 'rgb(35,27,46)',
       
      }}
    >
      <Box>
        <Box
          sx={{
            pb: 2,
          }}
        >
          <Link href="/" passHref>
            <Box
              component="img"
              sx={{ width: 125, height: 40, mt: '15px', ml: '24px', cursor: 'pointer' }}
              src="https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/logo-mp-3.svg"
              alt="Live from space album cover"
            />
          </Link>

          <Box>
            {ROUTE_LIST.map((route) => (
              <Link key={route.id} href={route.path} passHref>
                <Box
                  sx={{
                    color: 'rgb(211,216,218)',
                    pt: '15px',
                    cursor: 'pointer',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    ml: '30px',
                    ':hover': {
                      color: '#fff',
                    },
                  }}
                >
                  {route.icon}
                  <Box sx={{ ml: '12px', fontWeight: '600', fontSize: '14px' }}>{route.label}</Box>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>


        <Box sx={{ borderBottom: 1, borderColor: 'rgb(85, 84, 84)', mx: '30px' }}></Box>
        <Box>
          <List className="list__menu">
            <Link href="/" passHref>
              <ListItem
                sx={{
                  color: 'rgb(211,216,218)',
                  pt: '15px',
                  cursor: 'pointer',

                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  ml: '15px',
                  ':hover': {
                    color: '#fff',
                  },
                }}
              >
                <MusicNoteRoundedIcon />
                <Box sx={{ ml: '12px', fontWeight: '600', fontSize: '14px' }}>Nhạc mới</Box>
              </ListItem>
            </Link>
            <Link href="/" passHref>
              <ListItem
                sx={{
                  color: 'rgb(211,216,218)',
                  pt: '15px',
                  cursor: 'pointer',

                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  ml: '15px',
                  ':hover': {
                    color: '#fff',
                  },
                }}
              >
                <WorkspacesIcon />
                <Box sx={{ ml: '12px', fontWeight: '600', fontSize: '14px' }}>Thể loại</Box>
              </ListItem>
            </Link>
            <Link href="/top100" passHref>
              <ListItem
                sx={{
                  color: 'rgb(211,216,218)',
                  pt: '15px',
                  cursor: 'pointer',

                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  ml: '15px',
                  ':hover': {
                    color: '#fff',
                  },
                }}
              >
                <StarBorderIcon />
                <Box sx={{ ml: '12px', fontWeight: '600', fontSize: '14px' }}>Top 100</Box>
              </ListItem>
            </Link>
            <Link href="/mv" passHref>
              <ListItem
                sx={{
                  color: 'rgb(211,216,218)',
                  pt: '15px',
                  cursor: 'pointer',

                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  ml: '15px',
                  ':hover': {
                    color: '#fff',
                  },
                }}
              >
                <VideoLibraryIcon />
                <Box sx={{ ml: '12px', fontWeight: '600', fontSize: '14px' }}>MV</Box>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Box>
    </Box>
  );
}
