import React from "react";
import { Box, Text} from '@chakra-ui/react'


export const HeroText = () => {
    return(

       
        <Box 
        maxWidth={{ base: '90%', sm: '80%', md: '60%', lg: '50%'}}
        mb={{ base: 4, md: 0 }}
        p={{ base: 0, sm: 6, md: 12, lg: 18, xl: 36 }}
        ml={{ base: 0, sm: 6, md: 12, lg: 18, xl: 36 }}
        >
       <Text
            fontFamily="EB Garamond"
            lineHeight="1.25"
            fontWeight="bold"
            fontSize={{ base: "1.25rem", sm: "2.375rem", md: "2.750rem", lg: "3.125rem", xl:'3.25rem' , "2xl":'3rem' }}
            textShadow="1px 1px 1px rgba(255, 255, 255, 0.8), -1px -1px 1px rgba(0, 0, 0, 0.2),4px 4px 5px rgba(0, 0, 0, 0.5),1px 1px 2px rgba(0, 0, 0, 0.1)"
          >
            <Text as="span" color="#ffffff">
              Empowering Your 
            </Text>
            <br/>
            <Text as="span" color="#F2994A">
              Digital
            </Text>
            {' '}
            <Text as="span" color="#56CCF2">
              World
            </Text>
          </Text>
        <Text
          fontFamily="Noto Sans"
          lineHeight="1.75"
          fontSize={{ base: ".75rem", sm: '1.0rem', md: "1.0rem", lg: "1.0rem", xl:'1.0rem' }}
          color="#ffffff"
          textAlign="left"
          >
          “ Our mission is to deliver innovative computer solutions that seamlessly integrate into your life. 
            Building community with tech professionals that 
            have soft skills and an unwavering commitment to excellence and ethics, we strive to enhance your 
            making technology accessible, efficient, and tailored to your needs. “
        </Text>
      </Box>

    )

}