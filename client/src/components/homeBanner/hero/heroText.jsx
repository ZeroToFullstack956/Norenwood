import React from "react";
import { Box, Text} from '@chakra-ui/react'


export const HeroText = () => {
    return(

       
        <Box 
        maxWidth={{ base: '90%', md: '60%', lg: '50%'}}
        mb={{ base: 16, md: 0, lg: 2 }}
        p={{ base: 0, sm: 6, md: 12, lg:0, xl: 10 }}
        ml={{ base: 0, sm: 6, md: 12, lg: 24, xl: 36 }}
        >
       <Text
            fontFamily="EB Garamond"
            lineHeight="1.25"
            fontWeight="bold"
            fontSize={{ base: "1.25rem", sm: "2.375rem", md: "2.750rem", lg: "3rem", xl:'3.25rem' , "2xl":'4.25rem' }}
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
          fontSize={{ base: "1.1rem", sm: '1.2rem', md: "1.15rem", lg: "1.35rem", xl:'1.35rem' }}
          color="#ffffff"
          textAlign="left"
          >
          “ Our mission is to deliver innovative computer solutions that seamlessly integrate into your life. 
            Building community with tech professionals that 
            have soft skills and an unwavering commitment to excellence and ethics, we strive to
            make technology accessible, efficient, and tailored to your needs. “
        </Text>
      </Box>

    )

}