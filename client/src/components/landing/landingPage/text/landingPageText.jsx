import { Stack, Box, Text, Flex } from '@chakra-ui/react';
// import {Logo} from '../images/logo';
import { css, keyframes } from '@emotion/react';

export const LandingPageText = ({font_Size}) => {
//   const typewriter = keyframes`
//   from { width: 0; }
//   to { width: 100%; }
// `;
// const typewriterStyle = css`
//   display: inline-block; // Apply the animation to the inline element
//   overflow: hidden; // Hide the text initially
//   white-space: wrap; // text wrap
//   border-right: .05em solid #2F80ED; // The typewriter cursor
//   animation: ${typewriter} 10s steps(160, end) 1s forwards; // Adjust timing, steps, and delay as needed
// `;
  return(
    <Text
      fontFamily="Inika"
      lineHeight="0.30"
      fontWeight="regular"
      fontSize={{ base: "36px", sm: "46px", md: "40px", lg: "48px", xl: "56px", "2xl": "56px" }}
      color="#2F80ED"
      mixBlendMode="darken"
      width="100%px"
      height="100%"
      maxWidth="100%"
      textAlign="center"
      // css={typewriterStyle}
    >
    
      <span>T</span>
      <Box
        as="span"
        fontFamily="Inria Serif"
        lineHeight="0.48"
        fontSize={{ base: "22px", sm: "18px", md: "31px", lg: "30px", xl: "28px", "2xl": "28px" }}
        color="#333333"
      >
        ech Empowerment Gateway
      </Box>
      <Box
        as="span"
        fontFamily="Inria Serif"
        lineHeight="1.0"
        fontSize="12px"
        color="#333333"
      ></Box>
      <Box
        as="span"
        fontFamily="Inria Serif"
        lineHeight="1"
        fontSize={font_Size}
        color="#333333"
      >
        . Streamline your tech journey with our curated, 
        up-to-date ☁️ Cloud, web development 💻, and programming resources.   
        Save time searching, streamline access to innovative 🛠️ tools and 🤖 AI solutions, 
        and join a community shaping the future of technology 🚀.
      </Box>
    </Text>
 
)}
