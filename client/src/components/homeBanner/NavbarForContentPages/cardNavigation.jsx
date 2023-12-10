import { Box, Flex, Link, Text, Image, Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState, } from 'react';
import { motion } from "framer-motion"
import pointer from '../../../assets/pointer.png';


export const CardNavbar = ({ onMobileViewChange, onActiveLinkChange }) => {
// Set the initial state where the pointer starts
const [activeLink, setActiveLink] = useState('Community');
const [screenSize, setScreenSize] = useState(window.innerWidth);

const isMobileView = screenSize <= 480;
// moves pointer y-axis
const pointerTransform = {large:'20px', small: '35px'}
const pointerTopPosition = screenSize > 626 ? pointerTransform.large : pointerTransform.small;
// Navigation items
const navItems = [
  { label: 'Community', id: 'Community' },
  { label: 'For Business', id: 'Business' },
  { label: 'For Students', id: 'Students' },
  { label: 'Events', id: 'Events'},
  { label: 'Services', id: 'Services'},
];
// dynamic values based on the screen width to adjust features
const imgTransform = {
  large: { Community: '12px', Business: '130px', Students: '250px', Events:'350px', Services:'430px' },
  medium: { Community: '2px', Business: '100px', Students: '200px', Events:'285px', Services:'355px'  },
  small: { Community: '2px', Business: '90px', Students: '180px', Events:'265px', Services:'345px'  },
  xsmall: { Community: '2px', Business: '90px', Students: '180px', Events:'265px', Services:'330px' },
  custom: { Community: '2px', Business: '90px', Students: '170px', Events:'240px', Services:'310px'  },   
};
// Responsive styles for Links and Separators
const linkStyle = { 
  fontSize: screenSize > 944 ? 'md' : screenSize > 410 ? 'xs' : 'xs', // Smaller font size for very small screens
  mr: screenSize > 410 ? 2 : 2, // Smaller margin for very small screens
};
// adjusts margin 
const separatorStyle = { 
  mx: screenSize > 410 ? 2 : 2, // Smaller margin for very small screens
};
// transforms pointer movement based on screen size
const currentTransform = screenSize > 944 ? imgTransform.large : 
                         screenSize >= 767 ? imgTransform.medium : 
                         screenSize > 615 ? imgTransform.medium: 
                         screenSize > 599 ? imgTransform.small : 
                         screenSize > 564 ? imgTransform.xsmall :
                         imgTransform.custom;
// handle the active link in the nav bar, set it and pass it up to the parent
const setActiveLinkAndNotifyParent = (linkId) => {
  setActiveLink(linkId);
  onActiveLinkChange(linkId); // Notify the parent component
};                       
// deals with screen size changes
useEffect(() => {
  const handleResize = () => {
    const newScreenSize = window.innerWidth;
    setScreenSize(newScreenSize);
    onMobileViewChange(newScreenSize <= 480);
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [onMobileViewChange]);

// Mobile Navigation Component with 2x2 Grid
const MobileNav = () => (
  <Grid templateColumns="repeat(2, 1fr)" gap={4} justifyItems="center">
    {navItems.map((item, index) => (
      <GridItem key={item.id} colSpan={index === 4 ? 2 : 1}>
        <Button
          onClick={() => setActiveLinkAndNotifyParent(item.id)}
          colorScheme={activeLink === item.id ? "blue" : "gray"}
          w="100%" // Full width of the grid item
        >
          {item.label}
        </Button>
      </GridItem>
    ))}
  </Grid>
);

// Default Navigation Component
const DefaultNav = () => (
    <>
      {navItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <Link
            onClick={() => setActiveLinkAndNotifyParent(item.id)}
            sx={linkStyle}
            color={activeLink === item.id ? "blue" : "black"} // Highlight active link
          >
            {item.label}
          </Link>
          {index < navItems.length - 1 && <Text sx={separatorStyle}> | </Text>}
        </React.Fragment>
      ))}
    </>
);

return (
  <Flex
    position="absolute"
    bottom={isMobileView ? '-165px' : '-40px'}
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
    width={{ base: '90%', sm: '80%', md: '65%' }}
    boxShadow="0 0 0 8px rgba(187, 189, 191, 0.5)"
  >
    {/* Pointer outside of the conditional rendering */}
    <Text 
        fontSize="lg" 
        fontWeight="bold"
      /> 
    <Box 
      display="flex" 
      alignItems="center" 
      pos="relative"
    >
{!isMobileView && (
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
      )}
      <Flex justifyContent="space-between">
        {isMobileView ? <MobileNav /> : <DefaultNav />}
      </Flex>
    </Box>
  </Flex>
);
};