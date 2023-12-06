import React from "react";
import { Box, Image} from '@chakra-ui/react'
import globe from '../../../assets/globe&computer.png'


export const HeroImage = () => {

    return(
        <>
    <Box
        display="flex"
        alignItems={{ base: 'flex-end', md: 'center' }}
        width={{ base: '100%', sm: '100%', md: '80%' }}
        minHeight={{ base: '150px', sm: '300px', md: '400px'}}
        order={{ base: -1, md: 0 }}
      >
        <Image
          src={globe}
          alt='A Globe with cellphone and laptop connected to it through the internet'
          boxSize={{ base: '90%', sm: '80%', md: '80%'}}
          h="auto"
          objectFit="contain"
          ml={{ base: 3, sm: 6, md: 12, lg: 24, xl: 32 }}
        />
    </Box>    
        </>
    )

}