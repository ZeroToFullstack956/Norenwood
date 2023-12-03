import { Hero } from './hero/hero.jsx';
import { Flex, VStack, Box, Spacer } from '@chakra-ui/react';


export const HeroContent = () => (
  <>
    <Flex
      direction="row" // Stack elements vertically
      width="100vw"
      height="100vh"
      background="linear-gradient(180deg, #56ccf2 0%, #56ccf200 80.73%)"
    >
      {/* Top horizontal bar for navigation */}
      <Flex justify="space-between" width="100%" paddingX="16" marginTop={6}>
        {/* Left placeholder for symmetry or additional content */}
        <Box></Box> 

        {/* LandingNav positioned on the right */}
       <Hero/>
      </Flex>

      {/* Main Content Area */}
      <Flex
        flexGrow={1} // Allows this flex container to take up remaining space
        justify="center" // Distribute space between elements
        paddingX="5" // Horizontal padding
        direction={{ base: "column", md: "row" }}
      >
        {/* center container */}
        <VStack align="center">
          
          <Box height={{ base: "20%", md: "40%" }}> {/* Adjust height as needed */}
            {/* Empty box to create space */}
          </Box>
         
        </VStack>

        {/* Right side container */}
        <VStack position="relative">
          {/* Empty Box as a spacer to control the vertical position of PhoneGraphic */}
          <Box height="20%"> {/* Adjust height as needed to control position */}
            {/* Empty box to create space */}
          </Box>

          {/* Additional space, if needed */}
          <Box height="20%"> {/* Adjust height as needed */}
            {/* Empty box to create space */}
          </Box>
        </VStack>
      </Flex>
    </Flex>
  </>
);
