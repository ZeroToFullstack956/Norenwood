import React from "react";
import { Box, Image} from '@chakra-ui/react'
import logo from '../../../assets/ztfs.jpg'

export const TopNavImage = () => {

    return(
        <Box
        p={2}
        bg="white" 
        borderRadius="md" 
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        display="flex" // Make this a flex container
        alignItems="center" // Align items vertically center
        justifyContent="center" // Align items horizontally center
        height="100%" // Ensure the container takes full height of its parent
      >
        <Image 
          src={logo} 
          alt="Zero to fullstack logo" 
          width={{ base: "60px", sm: "100px", md: "130px", lg: "160px"}} 
          objectFit="cover" 
        />
      </Box>
    )

}