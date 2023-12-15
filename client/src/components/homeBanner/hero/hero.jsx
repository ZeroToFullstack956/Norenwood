import React from "react";
import { Image, Flex } from '@chakra-ui/react'
import backdrop from '../../../assets/backdrop.png'
import { HeroText } from "./heroText";
import { HeroImage } from "./heroImage";


export const Hero = ({ isMobileView, isCheckboxChecked}) => {
  return (
    <Flex
      direction={["column", "row"]}
      alignItems="center"
      justifyContent="center" 
      position="relative"
      borderRadius={25}
      overflow="hidden" 
      maxH="xl"
      >
      {/* Render backdrop image only if isCheckboxChecked is false */}
      {!isCheckboxChecked && (
        <Image
          src={backdrop}
          alt='blue background with various shapes and designs'
          w='95%'
          h='100%'
          position="absolute"
          zIndex="-1"
          
        />
      )}

    <HeroText/>

    <HeroImage isMobileView = {isMobileView} isCheckboxChecked={isCheckboxChecked}/>

    </Flex>
  )
}
