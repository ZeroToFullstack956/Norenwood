import React from "react";
import { Box, Image} from '@chakra-ui/react'
import girl from '../../../assets/cute-freelance-girl-using-laptop-sitting-floor-smiling.png'
import ztfs from '../../../assets/ztfs.jpg'
import elipse3 from '../../../assets/Ellipse3.png'
import elipse4 from '../../../assets/Ellipse4.png'
import elipse5 from '../../../assets/Ellipse5.png'
import elipse6 from '../../../assets/Ellipse6.png'

export const HeroImage = ({ isMobileView }) => {

    return(
     <Box
      pos="relative"
      display="flex"
      alignItems={{ base: 'flex-end', md: 'center' }}
      width={{ base: '100%', md: '80%' }}
      minHeight={{ base: '150px', sm: '300px', md: '400px'}}
      order={{ base: -1, md: 0 }}
      left={{ base: 5, sm: 6, md: 12, lg: 14, xl:0 }}
      my={{ base: 5, sm: 6, md: 12, lg: 10, xl:12 }}
      bottom={{ base: 2, sm: 10 }}
      top={{ base: 0, sm: -16, md: 1, lg: 1, xl:1 }}
    >
      <Image
        src={isMobileView ? ztfs : girl}
        alt='a girl with a laptop sitting down'
        boxSize={{ base: '40%', md: '40%'}}
        h="auto"
        objectFit="contain"
        ml={{ base: 20, sm: 6, md: 6, lg: 12, xl: 20 }}
      />
      <Box
        pos="absolute"
        top={{ base: '50%', sm: '80%', md: '30%', lg: "8%"}}
        pr={{ base: 7, sm: 6, md: 12, lg: 24, xl: 32 }}
        left={["25%"]}
        zIndex={-1}
      >
         <Image
            src={elipse3}
            alt='large orange ellipse'
            boxSize={{ base: '50%', sm: '80%', md: '50%', lg: "70%"}}
            h="auto"
            objectFit="contain"
          />
      </Box>
      <Box
        pos="absolute"
        top={["45%"]}
        left={["0%"]}
        zIndex={-1}
      >
         <Image
            src={elipse4}
            alt='large blue ellipse'
            boxSize={{ base: '50%', sm: '80%', md: '50%', lg: "100%"}}
            h="auto"
            objectFit="contain"
          />
      </Box>
      <Box
        pos="absolute"
        top={{sm:"25%"}}
        left={["18%"]}
        zIndex={-1}
      >
         <Image
            src={elipse5}
            alt='small orange ellipse'
            boxSize={{ base: '50%', sm: '80%', md: '50%', lg: "100%"}}
            h="auto"
            objectFit="contain"
          />
      </Box>
      <Box
        pos="absolute"
        top={["55%"]}
        left={["52%"]}
        zIndex={-1}
      >
         <Image
            src={elipse6}
            alt='small blue ellipse'
            boxSize={{ base: '50%', sm: '80%', md: '50%', lg: "100%"}}
            h="auto"
            objectFit="contain"
          />
      </Box>
    </Box>
    )

}