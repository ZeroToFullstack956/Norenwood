import { Box, HStack, Text, Link, Image, Flex } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { TopNavImage } from './navImg';
import { gsap } from 'gsap';

export const TopNavContentPages = () => {
  const navItems = ["Home", "Contact", "Support"];
  const wavePathRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const svgHeight = 40; // Height of the SVG container
      const waveHeight = 20; // Center line of the wave
      const waveBreadth = 105;

      // Calculate amplitude based on mouse X position relative to window width
      let mouseXPercentage = (e.clientX) / window.innerWidth;
      let amplitude = (mouseXPercentage * 3) * svgHeight - waveHeight; // Amplitude varies between 0 and svgHeight

      // Ensure the amplitude stays within the bounds of the SVG container
      amplitude = Math.max(Math.min(amplitude, waveHeight), -waveHeight);

      // Adjust the wave based on mouse X position
      gsap.to(wavePathRef.current, {
        duration: 0.2,
        ease: "sine.inOut",
        attr: {
          d: `M0,${waveHeight} Q${waveBreadth / 2},${waveHeight + amplitude},${waveBreadth},${waveHeight} T${waveBreadth * 2},${waveHeight} T${waveBreadth * 3},${waveHeight} T${waveBreadth * 4},${waveHeight}`
        }
      });
    };
    // listen for mouse movement
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      // clean up the listener
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);


  // determine the link //to-do fix this
  const setLink = item => {
    return item === "For Business" ? "business" : item === "For Students" ? "students" : item === "Community" ? "community" : item === "Login/Sign-up" ? "login" : null
    }

  const handleClick = () => {

  };

  return (
    <Flex
        justify="space-between" 
        paddingY={2} 
        paddingX={6} 
        width="85%" 
        mx="auto" 
        background="transparent"
        mixBlendMode="darken"
      >

      <TopNavImage/>

      <Box flex="1" position="relative" overflow="hidden" ml={2}>
          <svg
            viewBox="0 0 360 40"
            position="absolute"
            top="50%"
            left="0"
            w="100%"
            style={{ transform: "translateY(-5%)" }}
          >
            <path
              ref={wavePathRef}
              fill="none"
              stroke="#2F80ED"
              strokeWidth="2"
              d="M0,20 Q45,20,90,20 T180,20 T270,20 T360,20 V40 H0 Z"
            />
          </svg>
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
              p={2}
              borderRadius="md"
              _hover={{ 
                bg: "gray.100",
                color: "#F2994A", 
                textDecoration: "underline", 
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)" // Shadow on hover
              }}
            >
              {item}
            </Link>
          ))}
      </HStack>
    </Flex>
  );
};
