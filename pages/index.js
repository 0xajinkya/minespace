import { Box, Container, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import LeftBar from '../components/LeftBar'
import Main from '../components/Main'
import RightBar from '../components/RightBar'


export default function Home() {
  return (
    <Box
      display={'flex'}
      width={'100%'}
      height={'100vh'}
      bgImage={'/img/doodle.png'}
      bgBlendMode
    >
      <LeftBar />
      <Main />
      <RightBar />
    </Box>
  )
}
