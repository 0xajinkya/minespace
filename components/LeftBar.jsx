import { Box, Container, HStack, Text, VStack, Button, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { RiHome5Line, RiHome5Fill, RiStore2Fill, RiStore2Line } from 'react-icons/ri'
import { IoIosAddCircle, IoMdNotificationsOutline, IoNotificationsSharp } from 'react-icons/io'
import { TiGroupOutline, TiGroup} from 'react-icons/ti'
import { GiAtomicSlashes } from 'react-icons/gi'
import { BiSearchAlt } from 'react-icons/bi'
import { FcLike } from 'react-icons/fc'



const LeftBar = () => {
  return (
    <Box
        flex='1.5'
        borderRight={'1px solid #DFDFDF'}
        fontFamily='Questrial'
    >
        <HStack
            justifyContent={'space-between'}
            paddingX='35px'
            paddingY={'10px'}
            borderBottom={'1px solid #DFDFDF'}
        >
            <Box
                height={'60px'}
                width={'60px'}
                overflow={'hidden'}
                borderRadius='50px'
                objectFit={'cover'}
                backgroundColor={'#3B0D68'}
                display='flex'
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Box
                    height={'45px'}
                    width={'45px'}
                    overflow={'hidden'}
                    borderRadius='50px'
                >
                <Image width={50} height={50} src={'/img/tony.jpg'}/>
                </Box>
            </Box>
            <Button
                backgroundColor={'transparent'}
                borderRadius='100px'
                width={'80px'}
                height={'80px'}
                _hover={{
                    backgroundColor: 'white'
                }}
            >
                <IoIosAddCircle 
                    color='#3B0D68' 
                    style={{width: '80px', height: '80px'}}
                />
            </Button>
        </HStack>
        <VStack
            margin='auto'
            marginTop='30px'
            paddingBottom='30px'
            alignItems={'start'}
            justifyContent={'start'}
            width='200px'
            gap='15px'
            borderBottom='1px solid #D9D9D9'
        >
            <Button
                display={'flex'}
                alignItems={'center'}
                gap='20px'
                borderRadius='50px'
                height='50px'
                paddingX='30px'
                backgroundColor='transparent'
                // width='150px'
                _hover={{
                    backgroundColor: '#3B0D68',
                    color: 'white'
                }}
            >
                <Box>
                    <RiHome5Line 
                    style={{
                        width: '25px',
                        height: '25px'
                    }}
                    />
                </Box>
                <Box>
                    <Text>Home</Text>
                </Box>
            </Button>
            <Button
                display={'flex'}
                alignItems={'center'}
                gap='20px'
                borderRadius='50px'
                height='50px'
                paddingX='30px'
                backgroundColor='transparent'
                // width='150px'
                _hover={{
                    backgroundColor: '#3B0D68',
                    color: 'white'
                }}
            >
                <Box>
                    <TiGroupOutline 
                    style={{
                        width: '25px',
                        height: '25px'
                    }}
                    />
                </Box>
                <Box>
                    <Text>
                        Network
                    </Text>
                </Box>
            </Button>
            <Button
                display={'flex'}
                alignItems={'center'}
                gap='20px'
                borderRadius='50px'
                height='50px'
                paddingX='30px'
                backgroundColor='transparent'
                // width='150px'
                _hover={{
                    backgroundColor: '#3B0D68',
                    color: 'white'
                }}
            >
                <Box>
                    <GiAtomicSlashes 
                    style={{
                        width: '25px',
                        height: '25px'
                    }}
                    />
                </Box>
                <Box>
                    <Text>
                        MineClubs
                    </Text>
                </Box>
            </Button>
            <Button
                display={'flex'}
                alignItems={'center'}
                gap='20px'
                borderRadius='50px'
                height='50px'
                paddingX='30px'
                backgroundColor='transparent'
                // width='150px'
                _hover={{
                    backgroundColor: '#3B0D68',
                    color: 'white'
                }}
            >
                <Box>
                    <BiSearchAlt 
                    style={{
                        width: '25px',
                        height: '25px'
                    }}
                    />
                </Box>
                <Box>
                    <Text>
                        Search
                    </Text>
                </Box>
            </Button>
            <Button
                display={'flex'}
                alignItems={'center'}
                gap='20px'
                borderRadius='50px'
                height='50px'
                paddingX='30px'
                backgroundColor='transparent'
                // width='150px'
                _hover={{
                    backgroundColor: '#3B0D68',
                    color: 'white'
                }}
            >
                <Box>
                    <RiStore2Line 
                    style={{
                        width: '25px',
                        height: '25px'
                    }}
                    />
                </Box>
                <Box>
                    <Text>
                        Store
                    </Text>
                </Box>
            </Button>
            <Button
                display={'flex'}
                alignItems={'center'}
                gap='20px'
                borderRadius='50px'
                height='50px'
                paddingX='30px'
                backgroundColor='transparent'
                // width='150px'
                _hover={{
                    backgroundColor: '#3B0D68',
                    color: 'white'
                }}
            >
                <Box>
                    <IoMdNotificationsOutline 
                    style={{
                        width: '25px',
                        height: '25px'
                    }}
                    />
                </Box>
                <Box>
                    <Text>
                        Notifs
                    </Text>
                </Box>
            </Button>
            <Button
                display={'flex'}
                alignItems={'center'}
                gap='20px'
                borderRadius='50px'
                height='50px'
                paddingX='30px'
                backgroundColor='transparent'
                // width='150px'
                _hover={{
                    backgroundColor: '#3B0D68',
                    color: 'white'
                }}
            >
                <Box>
                    <FcLike 
                    style={{
                        width: '25px',
                        height: '25px'
                    }}
                    />
                </Box>
                <Box>
                    <Text>
                        Notifs
                    </Text>
                </Box>
            </Button>
        </VStack>
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            marginTop='30px'
            color='#3B0D68'
            fontWeight='900'
        >
            <Text
                fontSize='30px'
                fontFamily='Comfortaa'
            >
                MineSpace
            </Text>
        </Box>
    </Box>
  )
}

export default LeftBar