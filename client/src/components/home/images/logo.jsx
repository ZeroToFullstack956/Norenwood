import { Box, VStack, Image, Text } from '@chakra-ui/react';
import codeCrafters from '../../../assets/codeCrafters.jpg';

export const Logo = () => {
    
    return(
  <VStack spacing={0} margin={2} padding={2} align="center" maxWidth="518px" width="100%" mixBlendMode="darken">
    <Image
      src={codeCrafters}
      alt="Codecrafters"
    />
    <Text fontSize="lg">Simplifying Technology Solutions</Text>
  </VStack>
)};
