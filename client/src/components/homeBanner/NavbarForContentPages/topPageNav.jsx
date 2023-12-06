import { Box, HStack, Text, Link, Image, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import logo from '../../../assets/ztfs.jpg'

export const LandingNav = () => {
  const navItems = ["Home", "Contact", "Support"];


  // determine the link //to-do fix this
  const setLink = item => {
    return item === "For Business" ? "business" : item === "For Students" ? "students" : item === "Community" ? "community" : item === "Login/Sign-up" ? "login" : null
    }

  const handleClick = () => {
    useEffect(() => {
      return () => {
        // Cleanup code on unmount
      };
    }, []); 
  };

  return (
    <Flex
      justify="space-between" 
      paddingY={2} 
      paddingX={6} 
      width="75%" 
      mx="auto" 
      background="transparent"
      mixBlendMode="darken"
    >
      <Box>
      <Image 
          src={logo} 
          alt="Zero to fullstack logo" 
          width={{ base: "40px", md: "100px"}} 
          objectFit="cover" 
        />
      </Box>

      <HStack spacing={4}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={setLink(item)}
            onClick={handleClick}
            fontFamily="Noto"
            lineHeight="1.5"
            fontWeight="semibold"
            fontSize="16px"
            color="#000000"
            _hover={{ color: "#F2994A", textDecoration: "underline" }}
          >
            {item}
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};
