import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import pointer from '../../../assets/pointer.png';


export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // create dynamic values based on the screen width to adjust features
  const imgTransform = {
    large: { home: '17px', about: '160px', contact: '320px' },
    medium: { home: '2px', about: '138px', contact: '285px' },
    small: { home: '2px', about: '115px', contact: '250px' },
    custom: { home: '2px', about: '145px', contact: '285px' },   
  };

  const pointerTransform = {
    large:'20px',
    medium: '45px',
    small: '45px',  
  }
  // Responsive styles for Links and Separators
  const linkStyle = { 
    fontSize: screenSize > 410 ? 'md' : 'sm', // Smaller font size for very small screens
    mr: screenSize > 410 ? 2 : 2, // Smaller margin for very small screens
  };

  const separatorStyle = { 
    mx: screenSize > 410 ? 2 : 2, // Smaller margin for very small screens
  };
  const currentTransform = screenSize > 836 ? imgTransform.large : 
                           screenSize > 767 ? imgTransform.medium : 
                           screenSize >= 639 ? imgTransform.large : 
                           screenSize < 639 && screenSize > 555 ? imgTransform.custom : 
                           imgTransform.small; 

  const pointerTopPosition = screenSize > 836 ? pointerTransform.large : 
                             screenSize > 767 ? pointerTransform.medium : 
                             screenSize > 639 ? pointerTransform.large : 
                             pointerTransform.small;
  return (
    <Flex 
        position="absolute"
        bottom="-40px"
        left={0}
        right={0}
        bg='whitesmoke'
        margin="auto"
        px={6} 
        py={6} 
        color='black' 
        alignItems='center' 
        justify='center' 
        width={{ base: '90%', sm: '80%', md: '60%' }}
        boxShadow="0 0 0 8px rgba(187, 189, 191, 0.5)"
    >
      <Text 
        fontSize="lg" 
        fontWeight="bold"
      /> 
        <Box 
          display="flex" 
          alignItems="center" 
          pos="relative"
        >
          <Box 
            style={{ pointerEvents: 'none' }} 
            pos="absolute" 
            left="0" 
            h="100%"
          >
            <motion.div 
            animate={{ x: currentTransform[activeLink], y: pointerTopPosition }} 
            transition={{ duration: 0.5 }}
          >
            <Image src={pointer} />
          </motion.div>
          </Box>
          <Flex justifyContent="space-between">
          <Link onClick={() => setActiveLink('home')} sx={linkStyle}>
              For Business
            </Link> 
            <Text sx={separatorStyle}> | </Text> 
            <Link onClick={() => setActiveLink('about')} sx={linkStyle}>
              For Students
            </Link>
            <Text sx={separatorStyle}> | </Text> 
            <Link onClick={() => setActiveLink('contact')} sx={linkStyle}>
              Community Events
            </Link>
          </Flex>
        </Box>
    </Flex>
  );
}
