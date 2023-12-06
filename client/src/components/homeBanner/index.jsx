import { Hero } from './hero/hero.jsx';
import { Flex, VStack, Box, Spacer } from '@chakra-ui/react';


export const HeroContent = () => (
  <>
    <Flex
      direction="column" 
      width="100vw"
      height="100vh"
      background="linear-gradient(0deg, #56ccf2 0%, #56ccf200 80.73%)"
    >
      {/* Top horizontal bar for navigation */}
      <Flex justify="space-between" width="100%" paddingX="16" marginTop={6}>
       <Hero/>
      </Flex>
    </Flex>
  </>
);
