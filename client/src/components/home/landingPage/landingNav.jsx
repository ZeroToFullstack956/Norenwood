import { Box, HStack, Text, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const LandingNav = () => {
  const navItems = ["For Business", "For Students", "Community", "Login/Sign-up"];

  // determine the link
  const setLink = item => {
    return item === "For Business" ? "For Business" : item === "For Students" ? "For Students" : item === "Community" ? "Community" : item === "Login/Sign-up" ? "Login/Sign-up" : null
  }

  const handleClick = e =>{
    const element = e.target.innerText;

    useEffect(() => {
      const authUser = () => {

      }
      return () => {
        // Cleanup code on unmount
      };
    }, []); 

    switch (element) {
      case "For Business":
        useNavigate('/business')
        break;
      case "For Students":
        useNavigate('/students')
        break;
      case "Community":
        useNavigate('/community')
        break;
      case "Login/Sign-up":
        useNavigate('/login')
        break;
      default:
        break;
    }

  }
  return (
    <HStack
      spacing={4} 
      align="center"
      justify="flex-end" 
      paddingY={2} 
      paddingX={6} 
      width="100%"
      maxWidth={{ base: "20%", md: "40%" }} 
      background="transparent" 
      mixBlendMode="darken"
    >
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
  );
};
