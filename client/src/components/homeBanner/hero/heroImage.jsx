import React from "react";
import { Box, Image} from '@chakra-ui/react'
import girl from '../../../assets/cute-freelance-girl-using-laptop-sitting-floor-smiling.png'
import elipse3 from '../../../assets/Ellipse3.png'
import elipse4 from '../../../assets/Ellipse4.png'
import elipse5 from '../../../assets/Ellipse5.png'
import elipse6 from '../../../assets/Ellipse6.png'

export const HeroImage = () => {

    return(
     <Box
      pos="relative"
      display="flex"
      alignItems={{ base: 'flex-end', md: 'center' }}
      width={{ base: '100%', sm: '100%', md: '80%' }}
      minHeight={{ base: '150px', sm: '300px', md: '400px'}}
      order={{ base: -1, md: 0 }}
    >
      <Image
        src={girl}
        alt='a girl with a laptop sitting down'
        boxSize={{ base: '80%', sm: '80%', md: '40%'}}
        h="auto"
        objectFit="contain"
        ml={{ base: 7, sm: 6, md: 12, lg: 24, xl: 32 }}
      />
      <Box
        pos="absolute"
        top={{ base: '50%', sm: '80%', md: '30%', lg: "5%"}}
        left={["25%"]}
        zIndex={-1}
      >
         <Image
            src={elipse3}
            alt='large orange ellipse'
            boxSize={{ base: '50%', sm: '80%', md: '40%', lg: "100%"}}
            h="auto"
            objectFit="contain"
          />
      </Box>
      <Box
        pos="absolute"
        top={["45%"]}
        left={["12%"]}
        zIndex={-1}
      >
         <Image
            src={elipse4}
            alt='large blue ellipse'
            boxSize={{ base: '50%', sm: '80%', md: '40%', lg: "100%"}}
            h="auto"
            objectFit="contain"
          />
      </Box>
      <Box
        pos="absolute"
        top={{sm:"25%", md:"35%"}}
        left={["18%"]}
        zIndex={-1}
      >
         <Image
            src={elipse5}
            alt='small orange ellipse'
            boxSize={{ base: '50%', sm: '80%', md: '40%', lg: "100%"}}
            h="auto"
            objectFit="contain"
          />
      </Box>
      <Box
        pos="absolute"
        top={["60%"]}
        left={["58%"]}
        zIndex={-1}
      >
         <Image
            src={elipse6}
            alt='small blue ellipse'
            boxSize={{ base: '50%', sm: '80%', md: '40%', lg: "100%"}}
            h="auto"
            objectFit="contain"
          />
      </Box>
    </Box>
    )

}