import { Box } from '@mui/system';
import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Avatar, IconButton, TextField, Tooltip } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
export default function Header() {
  return (
    <Box
      sx={{
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        height: '80px',
        ml: '242px',
        maxWidth: '100%',
        mr: '15px'
        
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <ArrowBackIcon
          sx={{
            transform: 'scale(1.2)',
            cursor: 'pointer',
            color: ' rgb(161, 160, 160)',
          }}
        />
        <ArrowForwardIcon
          sx={{
            transform: 'scale(1.2)',
            cursor: 'pointer',
            color: 'rgb(161, 160, 160)',
            mx: '25px',
          }}
        />

        <Box
          sx={{
            bgcolor: 'rgb(47, 39, 57)',
            height: '40px',

            minWidth: '500px',
            borderRadius: '40px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SearchIcon
            sx={{
              transform: 'scale(1.2)',
              cursor: 'pointer',
              lineHeight: '40px',
              ml: '10px',
              mr: '5px',
              color: 'rgb(211,216,218)'
            }}
          />
          <Box
            component="input"
            placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
            sx={{
              width: '100%',
              ml: '5px',
              mr: '20px',
              color: 'rgb(211,216,218)',
              border: 'none',
              bgcolor: 'rgb(47, 39, 57)',
              fontSize: '14px',
              ':focus': {
                outline: 'none',
              },
            }}
          ></Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Box>
          <Tooltip
            title="Chủ đề "
            sx={{ width: '40px', height: '40px', bgcolor: 'rgb(47, 39, 57)' }}
          >
            <IconButton>
              <Avatar
                alt="Remy Sharp"
                src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-shirt-icon-for-your-design-websites-and-projects-png-image_1888204.jpg"
              />
            </IconButton>
          </Tooltip>
        </Box>

        <Box>
          <Tooltip
            title="Tải lên"
            sx={{
              bgcolor: 'rgb(47, 39, 57)',
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              ml: '10px',
            }}
          >
            <IconButton>
              <FileUploadIcon
                sx={{
                  color: 'rgb(211,216,218)',
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>

        <Box>
          <Tooltip
            title="Cài đặt"
            sx={{
              bgcolor: 'rgb(47, 39, 57)',
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              ml: '10px',
            }}
          >
            <IconButton>
              <SettingsIcon
                sx={{
                  borderRadius: '50%',
                  color: 'rgb(211,216,218)',
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ml: "10px", cursor: "pointer"}}>
          <Avatar sx={{ }}>
            <PersonOutlineIcon />
          </Avatar>
        </Box>
      </Box>
    </Box>
  );
}
