import { MainLayout } from '@components/layout'
import Slider from '@components/slider/slider'
import { NextPageWithLayout } from '@models/common'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'



const Home: NextPageWithLayout = () => {
  return (
    <Box >  
       <Head>
        <title>hihi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box  >
        <Slider />
      </Box>
    </Box>
    
  )
}

Home.Layout = MainLayout;

export default Home
