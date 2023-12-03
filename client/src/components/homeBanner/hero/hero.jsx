import React from "react";
import { Stack, VStack, Box, Text, Image, Link } from '@chakra-ui/react'
import backdrop from '../../../assets/backdrop.png'
import globe from '../../../assets/globe&computer.png'


export const Hero = ({ onClickJoinMeetup }) => {
  return (
  <Box className="navContainer">
  <Stack >
    <Box position="relative"> 
    {/* Position relative here to accomodate for position absolute in child container */}
    <Image
      borderRadius={8}
      objectFit='cover'
      src={backdrop}
      alt='blue background'
      w='100%'
      />
    <Box>
      <Text
      fontFamily="EB Garamond"
      fontWeight="bold"
      fontSize={{ base: "12px", sm: "18px", md: "22px", lg: "24px", xl:'26px' , "2xl":'26px' }}
      color="#ffffff"
      width='90%'
      right='6%'
      textAlign="center"
      position="absolute"
      top="2%"
      textShadow="1px 1px 1px rgba(255, 255, 255, 0.8), -1px -1px 1px rgba(0, 0, 0, 0.2),4px 4px 5px rgba(0, 0, 0, 0.5),1px 1px 2px rgba(0, 0, 0, 0.1)" // 3D letterpress
      padding={1}
      >
        Empowering Your Digital World
      </Text>
      </Box>
        <Box
          as='button'
          position="absolute" // parent needs position: relative
          top={{ base: "80%",sm: "80%", md: "50%", lg: "50%"}}  // positioning below the text
          left="50%" // centers the button horizontally
          transform="translateX(-50%)" // for centering vertically
          height='40px'
          lineHeight='1.0'
          transition='all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
          border='1px'
          px='18px'
          borderRadius='8px'
          fontSize='16px'
          fontWeight='semibold'
          bg='#407a10'
          borderColor='#ccd0d5'
          color='#ffffff'
          boxShadow='inset 0px -8px 10px #00000033, inset 0px 4px 4px #ffffff80'
          onClick={ onClickJoinMeetup }
          _hover={{ 
              boxShadow: '0 8px 10px rgba(0, 0, 0, 0.14), 0 6px 6px rgba(88, 144, 255, 0.2)'
          }}
          _active={{
              bg: '#edb664',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
              boxShadow: '0 2px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(88, 144, 255, 0.1)'
          }}>
          <Link color='white.500' href='#'>Find out more..</Link>
        </Box>
    </Box>
    <Box width="75px" height="10%" />
    <VStack>
    <Box>
      <Image  
        boxSize={{ base: "75px",sm: "100px", md: "125px", lg: "125px", xl:'150px' }}
        borderRadius={8}
        objectFit='cover'
        src={globe}
        alt='A Globe with cellphone and laptop connected to it throught the internet'/>
    </Box>
    <Text
      fontFamily="Noto Sans"
      lineHeight="1.0"
      fontWeight="bold"
      fontSize={{ base: "20px", sm: '26px', md: "30px", lg: "34px", xl:'40' }}
      color="#000000"
      width="640px"
      height="100%"
      maxWidth="100%"
      textAlign="center">
     “ Our mission is to deliver innovative computer solutions that seamlessly integrate into your life. 
       From cutting-edge software to reliable hardware, building community with tech professionals that 
       have soft skills and an unwavering commitment to excellence and ethics, we strive to enhance your 
       computing experience, making technology accessible, efficient, and tailored to your needs. “
    </Text>
    <Text
      fontFamily="Noto Sans"
      lineHeight="1.0"
      fontWeight="displayregular"
      fontSize={{ base: "14px", sm: '16px', md: "20px", lg: "22px" }}
      color="#000000"
      width="1102px"
      height='100%'
      maxWidth="80%"
      textAlign="center"
      marginBottom='5%'>

    </Text>
    </VStack>
  </Stack>
  </Box>
  )
  }

