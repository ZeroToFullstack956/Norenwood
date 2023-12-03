import { Box, VStack, Image, Text } from '@chakra-ui/react';
import ztfs from '../../../assets/ztfs.jpg';

export const Logo = () => {
    
    return(
  <VStack spacing={0} margin={2} padding={2} align="center" maxWidth="518px" width="100%" mixBlendMode="darken">
    <Image
      src={ztfs}
      alt="Zero-to-fullstack"
    />
    <Text fontSize="lg"></Text>
  </VStack>
)};
