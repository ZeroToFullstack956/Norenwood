import { Hero } from './hero/hero.jsx';
import { Flex, VStack, Box, Spacer } from '@chakra-ui/react';
import { LandingNav } from '../homeBanner/NavbarForContentPages/topPageNav.jsx';

export const HeroContent = () => (
  <>
    <Flex
      direction="column" 
      width="100vw"
      height="100vh"
      background="linear-gradient(0deg, #56ccf2 0%, #56ccf200 80.73%)"
    >
        {/* Flexbox for navbar */}
     <LandingNav/>
      <Flex 
      width="100%" 
      paddingX="32" 
      marginTop={6}>
       <Hero/>
      </Flex>
      {/* flexbox for card navigation */}
    </Flex>
  </>
);
