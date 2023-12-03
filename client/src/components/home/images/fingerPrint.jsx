import { Box, VStack, Image, Text } from '@chakra-ui/react';

import customSvg from '../../../assets/fingerPrint.png'

export const FingerPrint = () => {

    return(
<Box>
<Image
      src={customSvg}
      alt="fingerPrint"
    />
</Box>
)};