import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import { useState } from 'react';
import pointer from '../../../assets/pointer.png';
import { motion } from "framer-motion"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home')

  const imgTransform = {
    home: '-8px',
    about: '50px',
    contact: '116px', 
  }

  return (
    <Flex 
        position="absolute"
        bottom="-40px"
        left={0}
        right={0}
        bg='whitesmoke'
        margin="auto"
        px={5} 
        py={5} 
        color='black' 
        alignItems='center' 
        justify='center' 
        width={{ base: '100%', sm: '80%', md: '60%' }}
        boxShadow="0 0 0 6px rgba(187, 189, 191, 0.5)" // This is a white color set to be 50% transparent
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
          <Flex>
            <Link onClick={() => setActiveLink('home')} pr={4}>
              Home
            </Link>
            <Link onClick={() => setActiveLink('about')} pr={4}>
              About
            </Link>
            <Link onClick={() => setActiveLink('contact')} pr={4}>
              Contact
            </Link>
          </Flex>
        </Box>
    </Flex>
  );
}
