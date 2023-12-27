import React from "react";
import { Box, VStack, HStack, Heading, Text, Button, Image, useColorModeValue, Flex, Link, Tooltip } from '@chakra-ui/react';

export const DynamicCard = ({ cardData, onSelect, isSelected, selectedCard}) => {
    const smallImageHeight = "177.5px";
    const imageHeight = ["310px", '335px' ];

    const hoverStyle = {
        transition: "transform 0.25s ease-in-out",
        '&:hover': {
          transform: 'scale(1.1)' // This will make the card larger on hover
        }
    };

    const swapTransitionStyle = {
      transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
      transform: isSelected ? "scale(1.05) translateX(-5%)" : "scale(1) translateY(0)", // Enlarge and move up if selected
      opacity: isSelected ? 1 : 0.7, // More opaque if selected
  };
  
   // Function to render all cards
   const renderAllCards = () => {
    let allCards = [];
    for (let i = 0; i < cardData.length; i += 4) {
      // Left-hand side card
      if (cardData[i]) {
        allCards.push(renderLeftCard(cardData[i], `left-${i}`));
      }

      // Right-hand side cards
      const rightCardsBatch = cardData.slice(i + 1, i + 4);
      if (rightCardsBatch.length > 0) {
        allCards.push(renderRightCards(rightCardsBatch, `group-${Math.floor(i / 4)}`));
      }
    }
    console.log(cardData)
    console.log(allCards)
    return allCards;
  };

 // Function to render a single card
 const renderLeftCard = (card, key) => {
    const { image, address, title, time, description, link, date } = card;
    
    return (
    <Box
    onClick={() => onSelect(card)}
    bg={useColorModeValue('white', 'gray.700')}
    maxW="lg"
    borderWidth="1px"
    rounded="lg"
    shadow="lg"
    position="relative"
    key={key}
    sx={{
      ...swapTransitionStyle, 
  }}
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
        <Text fontSize="xs" as="h1" >{date} - {time}</Text>
      </Heading>
      <Text fontSize="xs" as="h1" >{address}</Text>
      <Text mt={2}>{description}</Text>
      <Button mt={4} colorScheme="teal" as={Link} href={link}>
        Learn More
      </Button>
    </Box>
  </Box>
 )
};

const renderRightCards = (cards, groupKey) => {
    return(
        <VStack spacing={4} mb={12} key={groupKey}>
          {cards.map((card, index) => {
          const { image, address, title, time, description, link, date } = card;
          
            return(
                <Tooltip label="Click to enlarge details" fontSize="md" key={`${groupKey}-card-${index}`}>
                <Flex
                    onClick={() => onSelect(card)}
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
                      ...swapTransitionStyle, 
                        ... (hoverStyle),
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
                    <Heading fontSize="lg" fontWeight="bold" as="h3">
                        {title}
                    </Heading>
                    <Text mt={0} >{description}</Text>
                    <Button mt={2} colorScheme="teal" className="dynamic-button" as={Link} href={link}>
                        Learn More
                    </Button>
                    </Box>
                </Flex>
                </Tooltip>
            );
          })}
        </VStack>
    );
};

  return (
    <>
    <HStack spacing={4} align="start" justifyContent="center" width="100%">
        {renderAllCards()}
    </HStack>
    </>
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
