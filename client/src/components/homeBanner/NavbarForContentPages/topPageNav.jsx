import { Box, HStack, Text, Link, Image, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';

export const LandingNav = () => {
  const navItems = ["For Business", "For Students", "Community", "Login/Sign-up"];
  const logo = ''; // put your logo url here

  // determine the link
  const setLink = item => {
    // your logic here
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
      width="100%"
      background="transparent"
      mixBlendMode="darken"
    >
      <Box>
        <Image src={logo} alt="Your company logo"/>
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

