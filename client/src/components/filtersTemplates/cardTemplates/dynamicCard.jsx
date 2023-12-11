import React, { useState, useEffect } from "react";
import { Box, VStack, HStack, Heading, Text, Button, Image, useColorModeValue, Flex } from '@chakra-ui/react';

export const DynamicCard = ({ cardData, isSelected, onSelect }) => {

const [data, setData] = useState(cardData);

useEffect(() => {
    // console.log(cardData)
    setData(cardData);
}, [cardData]);


const { image, address, title, time, description, link, date } = cardData;
const smallImageHeight = "165px";
const imageHeight = ["310px", '335px' ];
  // This can be replaced with actual data
  const smallerCards = [
    { title: 'Join the professional’s club', description: 'Learn, Earn & Enjoy.' },
    { title: 'Find best mentors for yourself', description: 'Lorem ipsum dolor sit amet.' },
    { title: 'Get yourself educated with today trends', description: 'Lorem ipsum dolor sit amet.' }
  ];



  return (
    <HStack spacing={4} align="start">
      {/* Featured Card on the Left */}
      <Box
        bg={useColorModeValue('white', 'gray.700')}
        maxW="lg"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
          <Box  
            w={["100%"]}
            h={imageHeight}
            bgImage={`url(${image})`}
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            roundedTop={["lg", null, "xl"]}
          />
        <Box p="6">
          <Heading fontSize="xl" fontWeight="semibold" as="h3" lineHeight="tight">
            {title}
          </Heading>
          <Text mt={2}>{description}</Text>
          <Button mt={4} colorScheme="teal">
            Start Tutorial
          </Button>
        </Box>
      </Box>

      {/* VStack with smaller cards on the Right */}
      <VStack spacing={4} mb={12} >
        {smallerCards.map((card, index) => (
          <Flex
            key={index}
            direction={["column", null, "row"]}
            align="center"
            bg={useColorModeValue('white', 'gray.700')}
            maxW="calc(420px + 50px)"
            borderWidth="1px"
            rounded="xl"
            shadow="lg"
            w="100%"
            h={smallImageHeight}
            sx={{
                "@media screen and (max-width: 1200px)": {
                  fontSize: "smaller", // Adjust font size
                  ".dynamic-button": {
                    p: 1, // Adjust padding for button
                    mt:0,
                    fontSize: "smaller",
                  },
                  ".dynamic-text": {
                    fontSize: "smaller", // Adjust text font size
                  },
                  ".dynamic-heading": {
                    fontSize: "md", // Adjust heading font size
                  },
                },
                "@media screen and (max-width: 468px)": {
                    ".dynamic-button": {
                      fontSize: "xxs", // Smaller font size for button
                      p: 1, // Adjust padding for the button
                      mt: 0, // Adjust margin-top for the button
                      left: 10,
                      bottom: 3,
                    },
                    ".dynamic-heading": {
                        fontSize: "xs", // Adjust heading font size
                      },
                  },
                }}
          >
            <Box
              bgImage={`url(${image})`}
              alt={`Card image`}
              h='100%'
              bgPos="center"
              bgSize="cover"
              roundedTop={["lg", null, "none"]}
              roundedLeft={["none", null, "xl"]}
              w={["100%", null, "40%"]}
              objectFit="cover"
            />
            <Box p="4" flex="1">
              <Heading fontSize="lg" fontWeight="bold" as="h4" lineHeight="tight" className="dynamic-heading">
                {title}
              </Heading>
              <Text mt={1} className="dynamic-text">{description}</Text>
              <Button mt={2} colorScheme="teal" className="dynamic-button">
                Start Tutorial
              </Button>
            </Box>
          </Flex>
        ))}
      </VStack>
    </HStack>
  );
};
//         <Box
//             p={5}
//             borderWidth="1px"
//             borderRadius="lg"
//             boxShadow="md"
//             bg={useColorModeValue('white', 'gray.800')}
//             onClick={onSelect}
//             style={{ transform: isSelected ? 'scale(1.1)' : 'scale(1)' }}
//         >
//         <Image src={image} borderRadius="md" />
//         <Heading size="md" my="2">
//           {title}
//         </Heading>
//         <Link
//           href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
//           isExternal
//           fontSize={["sm", "md"]}
//           color="gray.500"
//           _hover={{ textDecoration: 'underline' }}
//         >
//           {address}
//         </Link>
//         <Text mb="3">{description}</Text>
//         <Text fontSize={["xs", "sm"]} color="gray.500">
//           {time} - {date}
//         </Text>
//         <Button colorScheme="blue" variant="outline" as={Link} href={link}>
//           More Info
//         </Button>
//       </Box>
    
//   );
// };
