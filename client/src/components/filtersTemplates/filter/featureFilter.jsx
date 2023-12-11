import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Text, IconButton, VStack ,HStack, Button, Tooltip, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { CalendarIcon, ViewIcon } from '@chakra-ui/icons';
import { sortByLocation } from "../../../utils/sortByLocation";
import Trie from '../../../utils/textSearchTrie'
import { WideCardsContainer } from "../cardTemplates/carContainers/wideCardContainer";
import { DynamicCardContainer } from "../cardTemplates/carContainers/dynamicCardContainer";
// import { CalendarCardContainer } from "../cardTemplates/carContainers/calendarCardContainer";
// import { RenderPagination } from "../../pagination/RenderPagination";


export const FeatureFilter = ({ cardData, secondaryNavSelection  }) => {
    // set the card data
    const [items, setItems] = useState(cardData);
    // State for search query
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const trie = useRef(new Trie());
    let CardContainerComponent;
    // Populate the trie with titles from cardData
    useEffect(() => {
        // console.log(cardData)
        setItems(cardData);
        cardData.forEach(item => {
            if (item.title) {
                trie.current.insert(item.title.toLowerCase());
            }
        });
    }, [cardData]);
    
    // to-do sort by location using google cloud

    // sort by date
    const sortByDate = () => {
        // Sorting logic
        const sortedItems = [...items].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        setItems(sortedItems);
    };

    // Function to handle search
    const handleSearch = () => {
        const filteredItems = cardData.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setItems(filteredItems);
        setSuggestions([]); // Clear suggestions after search
    };
 
    // switch statment to render the cards based off user selection from the NavBar
    switch (secondaryNavSelection) {
        case 'Business':
        case 'Students':
            CardContainerComponent = DynamicCardContainer;
            break;
        case 'Services':
        case 'Community':
            CardContainerComponent = WideCardsContainer;
            break;
        case 'Events':
            CardContainerComponent = () => <Text>This is the CalendarCardContainer</Text>
            break;
        default:
            CardContainerComponent = null;
            break;
    }

    return (
        <Box width={["90%", "80%", "75%"]} mx="auto" py={4} mt={24}>
                {/* Outer Flex container keeps search bar in place upon search*/}
                <Flex justifyContent="space-between" mb={4}>
                {/* Left section: Featured */}
                <Text fontSize="2xl" fontWeight="bold" alignSelf="center">Featured</Text>
                {/* Middle section: Search bar */}
                <Box position="relative" width={["90%", "400px", "400px"]} top={["-3.5rem", "-3.5rem", "-2rem"]} alignSelf="center">
                    <InputGroup size="md" m={1}>
                    <Input 
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => {
                            const query = e.target.value;
                            setSearchQuery(query);
                            if (query.trim() === '') {  // Update the search box
                                setSuggestions([]);
                            } else {
                                const completions = trie.current.findCompletions(query.toLowerCase());
                                setSuggestions(completions);
                            }
                        }}
                        bg="white"
                        border="1px"
                        borderColor="gray.300"
                    />
                    <InputRightElement width="4.5rem">
                        <Button 
                            h="1.75rem" 
                            size="sm" 
                            onClick={handleSearch} 
                            bg="transparent" 
                            _hover={{ bg: 'gray.100' }}
                            border='.5px solid gray'
                        >
                            🔎
                        </Button>
                    </InputRightElement>
                </InputGroup>
                    {/* Dropdown for suggestions */}
                    {suggestions.length > 0 && (
                            <VStack 
                            align="stretch" 
                            mt="1" 
                            position="absolute"
                            width="auto"
                            zIndex="dropdown"
                            bg="rgba(255, 255, 255, 0.5)"
                            maxH="100px" // Adjust this value if necessary
                            overflowY="scroll" // Force scrollbar visibility
                            borderRadius="md"
                            boxShadow="md"
                            sx={{ 
                                '&::-webkit-scrollbar': {
                                    width: '8px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    width: '12px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: 'gray',
                                    borderRadius: '24px',
                                },
                            }} // Custom scrollbar styles
                        >
                            {suggestions.slice(0, 5).map((suggestion, index) => ( // Only show first 5 suggestions
                                <Button
                                    key={index}
                                    variant="ghost"
                                    justifyContent="start"
                                    onClick={() => setSearchQuery(suggestion)}
                                >
                                    {suggestion}
                                </Button>
                            ))}
                        </VStack>
                    )}
                </Box>
                {/* Right section: View and icons */}
                <HStack spacing={4} alignSelf="center">
                    <Text>View</Text>
                    <Tooltip label="Sort by Date" placement="top">
                        <IconButton aria-label="Sort by Date" icon={<CalendarIcon />} onClick={sortByDate} />
                    </Tooltip>
                    <Tooltip label="Sort by Location" placement="top">
                        <IconButton aria-label="Sort by Location" icon={<ViewIcon />} onClick={sortByLocation} />
                    </Tooltip>
                </HStack>
            </Flex>
                {/* Separation line */}
            <Box borderBottom="1px" borderColor="gray.200" mb={4} />
                {/* Rendering the card templates through the card container, passing in the sorted data */}
                  {/* Conditional rendering of the card container */}
            {CardContainerComponent && <CardContainerComponent data={items} />}
        </Box>
    );
};
