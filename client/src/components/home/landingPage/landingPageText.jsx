import { Stack, Box, Text, Flex } from '@chakra-ui/react'
import {Logo} from '../images/logo'

export const LandingPageText = () => {
  return(


    <Text
      fontFamily="Inika"
      lineHeight="0.24"
      fontWeight="regular"
      fontSize="96px"
      color="#2F80ED"
      mixBlendMode="darken"
      width="716px"
      height="528px"
      maxWidth="100%"
    >
    
      <span>T</span>
      <Box
        as="span"
        fontFamily="Inria Serif"
        lineHeight="0.48"
        fontSize="48px"
        color="#333333"
      >
        ech Empowerment Awaits
      </Box>
      <Box
        as="span"
        fontFamily="Inria Serif"
        lineHeight="1.64"
        fontSize="14px"
        color="#333333"
      ></Box>
      <Box
        as="span"
        fontFamily="Inria Serif"
        lineHeight="1"
        fontSize="36px"
        color="#333333"
      >
        . Whether your a business, student or member of the communuty accelerate your track with Code-Crafters. 
        Our expertise in AWS/Azure cloud, web-development, programming and troubleshooting 
        craft the digital backbone of your success. Dive into a journey where tailored solutions 
        meet community collaboration, inciting innovation where we shape the future of tech, together.
      </Box>
    </Text>
 
)}
