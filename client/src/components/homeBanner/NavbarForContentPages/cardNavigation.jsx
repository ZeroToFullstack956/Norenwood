import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
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

    // Navigation items
    const navItems = [
      { label: 'For Business', id: 'home' },
      { label: 'For Students', id: 'about' },
      { label: 'Community & Events', id: 'contact' },
    ];

  // dynamic values based on the screen width to adjust features
  const imgTransform = {
    large: { home: '17px', about: '140px', contact: '290px' },
    medium: { home: '17px', about: '130px', contact: '260px' },
    xsmall: { home: '2px', about: '110px', contact: '230px' },
    custom: { home: '2px', about: '95px', contact: '180px' },   
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
  // dont judge my turnery :)
  const currentTransform = screenSize > 836 ? imgTransform.large : 
                           screenSize > 767 ? imgTransform.large : 
                           screenSize >= 639 ? imgTransform.large : 
                           screenSize > 555 ? imgTransform.medium: 
                           screenSize >= 480 ? imgTransform.xsmall : 
                           screenSize < 480 ? imgTransform.custom :
                           imgTransform.xsmall; 
// dont judge my turnery :)
  const pointerTopPosition = screenSize > 836 ? pointerTransform.large : 
                             screenSize >= 768 && screenSize <= 795 ? pointerTransform.medium : 
                             screenSize > 608 ? pointerTransform.large : 
                             pointerTransform.small;
  return (
    <Flex 
        position="absolute"
        bottom="-40px"
        left={0}
        right={0}
        bg='whitesmoke'
        borderRadius={8}
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
      transition={{ duration: 0.250 }}
    >
        <Image src={pointer} />
    </motion.div>
    </Box>
      <Flex justifyContent="space-between">
        {navItems.map((item, index) => (
              <React.Fragment key={item.id}>
              <Link
                onClick={() => setActiveLink(item.id)}
                sx={linkStyle}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && <Text sx={separatorStyle}> | </Text>} 
            </React.Fragment>
        ))}
      </Flex>
    </Box>
  </Flex>
  );
}
