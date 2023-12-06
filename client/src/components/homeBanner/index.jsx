import { Hero } from './hero/hero.jsx';
import { Flex, VStack, Box, Spacer } from '@chakra-ui/react';
import { LandingNav } from '../homeBanner/NavbarForContentPages/topPageNav.jsx';
import CardNavbar from './NavbarForContentPages/cardNavigation.jsx';


export const HeroContent = () => (
  <>
    <Flex
      direction="column" 
      width="100vw"
      height="100vh"
      background="linear-gradient(0deg, #56ccf2 0%, #56ccf200 50%)"
    >
     <LandingNav/>
    <Flex 
      paddingX={{ base: 7, sm: 6, md: 6, lg: 12, xl: 20 }} 
      marginTop={6}>
       <Box position="relative">

        <Hero/>
        <CardNavbar/>

       </Box>
      </Flex>
    </Flex>
  </>
);
