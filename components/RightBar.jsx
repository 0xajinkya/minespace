import { Box, VStack, Text, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import React from 'react'
import { BiSearchAlt, BiMessageRoundedDots } from 'react-icons/bi'
import { GrAnnounce } from 'react-icons/gr'

const RightBarCard = ({ title, list }) => {

  return (
    <Box
      width='90%'
      height='300px'
      backgroundColor='white'
      border='1px solid #D9D9D9'
      marginX='auto'
      borderRadius='30px'
      overflow={'hidden'}
      display='flex'
      // alignItems='center'
      // justifyContent='center'
      flexDir={'column'}
      gap='15px'
    >
      <Box
        width='200px'
        marginX='auto'
        color='#3B0D68'
      >
        <Box
        display={'flex'}
        gap='25px'
        marginTop={'20px'}
        >
          {title !== 'Announcements' ?
            <BiMessageRoundedDots 
            style={{
              width: '35px',
              height: '35px'
            }} 
            />
            :
            <GrAnnounce 
            style={{
              width: '35px',
              height: '35px'
            }} 
            />
          }
          <Text
            margin='auto'
            fontWeight='700'
            fontSize='20px'
          >
            {title}
          </Text>
        </Box>
      </Box>
      <Box
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        gap='10px'
        overflowY={'scroll'}
      >
        {list.map((l) => 
          <Box
            id={l.id}
            borderBottom='1px solid #D9D9D9'
          >
            <a href={l.href}><Text>{l.text}</Text></a>
          </Box>
        )}
      </Box>
    </Box>
  )
}

const list = [
  {
    id: 1,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 2,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 3,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 4,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 5,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 6,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 7,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 8,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 9,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 10,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 11,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 12,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 13,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 14,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 15,
    text: 'Hello',
    href: 'https://www.google.com'
  },
  {
    id: 16,
    text: 'Hello',
    href: 'https://www.google.com'
  }
]


const RightBar = () => {
  return (
    <Box
      flex={'2'}
      // bgColor={'red'}
      paddingY='30px'
      borderLeft={'1px solid #D9D9D9'}
      display='flex'
      flexDirection={'column'}
      gap='20px'
      fontFamily={'Nunito'}
    // alignItems='center'
    >
      <VStack>
        <Box
          width='70%'
        >
          <InputGroup
          >
            <InputLeftAddon
              bgColor={'transparent'}
              borderRadius={'50px'}
              cursor='pointer'
            >
              <BiSearchAlt />
            </InputLeftAddon>
            <Input
              placeholder='Search Clubs, User, Alumni...'
              borderRadius={'50px'}
              borderLeft='0px'
              focusBorderColor='#D9D9D9'
            />
          </InputGroup>
        </Box>
      </VStack>
      <RightBarCard title='Direct Pings' list={list}/>
      <RightBarCard title='Announcements' list={list}/>
    </Box>
  )
}

export default RightBar