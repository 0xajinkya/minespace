import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box
      width='100%'
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      gap='20px'
    >
      <Text
        fontFamily='Comfortaa'
        fontSize='40px'
      >
        Hello There
      </Text>
      <Text
        fontFamily='Nunito'
        fontSize='40px'
      >
        Hello There
      </Text>
      <Text
        fontFamily='Questrial'
        fontSize='40px'
      >
        Hello There
      </Text>
    </Box>
  )
}
