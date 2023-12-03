import { Stack, Box, Text, Flex } from '@chakra-ui/react';
import {Logo} from '../images/logo';
import { css, keyframes } from '@emotion/react';

export const LandingPageText = () => {
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
      fontSize="96px"
      color="#2F80ED"
      mixBlendMode="darken"
      width="100%px"
      height="100%"
      maxWidth="75%"
      textAlign="center"
      // css={typewriterStyle}
    >
    
      <span>T</span>
      <Box
        as="span"
        fontFamily="Inria Serif"
        lineHeight="0.48"
        fontSize="48px"
        color="#333333"
      >
        ech Empowerment Awaits
      </Box>
      <Box
        as="span"
        fontFamily="Inria Serif"
        lineHeight="1.64"
        fontSize="14px"
        color="#333333"
      ></Box>
      <Box
        as="span"
        fontFamily="Inria Serif"
        lineHeight="1"
        fontSize="36px"
        color="#333333"
      >
        . Whether your a business, student or member of the communuty accelerate your track with Zero.ToFullstack. 
        Our expertise in AWS/Azure cloud, web-development, programming and troubleshooting 
        craft the digital backbone of your success. Dive into a journey where tailored solutions 
        meet community collaboration, inciting innovation where we shape the future of tech, together.
      </Box>
    </Text>
 
)}
