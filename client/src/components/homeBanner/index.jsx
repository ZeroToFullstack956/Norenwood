import { Hero } from './hero/hero.jsx';
import { Flex, VStack, Box, Spacer } from '@chakra-ui/react';
import { TopNavContentPages } from '../homeBanner/NavbarForContentPages/topPageNav.jsx';
import CardNavbar from './NavbarForContentPages/cardNavigation.jsx';
import { PropogateTemplates } from '../filtersTemplates/index.jsx'

// Structure and background for the content pages
export const HeroContent = () => (
    <Flex
      direction="column" 
      width="100vw"
      height="100%"
      background="linear-gradient(0deg, #56ccf2 0%, #56ccf200 75%)"
    >
     <TopNavContentPages/>
    <Flex 
      paddingX={{ base: 7, sm: 6, md: 6, lg: 12, xl: 20 }} >
      <Box position="relative">

        <Hero/>
        <CardNavbar/>

      </Box>
    </Flex>

        <PropogateTemplates/>
    </Flex>
);
