import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Link from 'next/link';

export default function Slider() {
  var Slider_List = [
    <Box
      component="img"
      className="slider_img slider_img__first"
      src="https://photo-zmp3.zadn.vn/banner/8/4/4/d/844dfe8590fa3c5f1a7aff7111c00ba9.jpg"
      alt=""
      key="first"
    />,
    <Box
      component="img"
      className="slider_img slider_img__second"
      src="https://photo-zmp3.zadn.vn/banner/e/4/a/f/e4afac91a65c4651043d5de5a82612ba.jpg"
      alt=""
      key="second"
    />,
    <Box
      component="img"
      className="slider_img slider_img__last"
      src="	https://photo-zmp3.zadn.vn/banner/1/d/7/d/1d7dd52ab8fa93bdcd97b87b8e14b846.jpg"
      alt=""
      key="third"
    />,
  ];

  return (
    <Box sx={{ width: '100%', py: "16px", px:"30px" }}>
      <Grid container spacing={2}>
        {Slider_List.map((slider, idx) => {
          return (
            <Grid item xs={6} md={4} sm={6} key={idx}>
              <Link href="/" >{slider}</Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
