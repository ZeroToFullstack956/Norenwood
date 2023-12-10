import { Hero } from './hero/hero.jsx';
import React, { useState, } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { TopNavContentPages } from '../homeBanner/NavbarForContentPages/topPageNav.jsx';
import { CardNavbar } from './NavbarForContentPages/cardNavigation.jsx';
import { PropogateTemplates } from '../filtersTemplates/index.jsx'

// Structure and background for the content pages
export const HeroContent = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 480);
  const [activeLink, setActiveLink] = useState('Community')

  // change the view to icons for mobile
  const handleMobileViewChange = (isMobile) => {
    setIsMobileView(isMobile);
  };
  // set the active link from the child component
  const handleActiveLinkChange = (activeLinkId) => {
    setActiveLink(activeLinkId)
    console.log(activeLink)
  };

  return (
    <Flex
      direction="column" 
      width="100vw"
      height="100%"
      background="linear-gradient(0deg, #56ccf2 0%, #56ccf200 75%)"
    >
      <TopNavContentPages />
      <Flex paddingX={{ base: 7, sm: 6, md: 6, lg: 12, xl: 20 }} >
        <Box position="relative">
          <Hero isMobileView={isMobileView}/>
          <CardNavbar onMobileViewChange={handleMobileViewChange} onActiveLinkChange={handleActiveLinkChange} />
        </Box>
      </Flex>

      <Box mt={isMobileView ? '150px' : '40px'}>
        <PropogateTemplates secondaryNavSelection={activeLink} />
      </Box>
    </Flex>
  );
};
