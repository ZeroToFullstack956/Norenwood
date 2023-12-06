import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import { useState } from 'react';
import pointer from '../../../assets/pointer.png';
import { motion } from "framer-motion"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home')

  const imgTransform = {
    home: '17px',
    about: '160px',
    contact: '320px', 
  }

  return (
    <Flex 
        position="absolute"
        bottom="-40px"
        left={0}
        right={0}
        bg='whitesmoke'
        margin="auto"
        px={6} // add more padding on left and right 
        py={6}  // add more padding on top and bottom
        color='black' 
        alignItems='center' 
        justify='center' 
        width={{ base: '100%', sm: '80%', md: '60%' }}
        boxShadow="0 0 0 8px rgba(187, 189, 191, 0.5)" // This is a white color set to be 50% transparent
    >
      <Text 
        fontSize="xl" 
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
            top="20px" 
            h="100%"
          >
            <motion.div 
              animate={{ x: imgTransform[activeLink] }} 
              transition={{ duration: 0.5 }}
            >
              <Image src={pointer} />
            </motion.div>
          </Box>
          <Flex justifyContent="space-between">
            <Link onClick={() => setActiveLink('home')}>
              For Business
            </Link> 
            <Text mx={6}> | </Text> 
            <Link onClick={() => setActiveLink('about')}>
              For Students
            </Link>
            <Text mx={6}> | </Text>
            <Link onClick={() => setActiveLink('contact')}>
              Community Events
            </Link>
          </Flex>
        </Box>
    </Flex>
  );
}
