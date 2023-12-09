import React, { useState, useEffect } from "react";
import { Box, Flex, Text, IconButton, HStack, VStack, Tooltip } from "@chakra-ui/react";
import { CalendarIcon, ViewIcon } from '@chakra-ui/icons';
import { sortByLocation } from "../../../utils/sortByLocation";

// import { EventCard } from "../cardTemplates/wideCard";
import { WideCardsContainer } from "../cardTemplates/carContainers/wideCardContainer";
// import { RenderPagination } from "../../pagination/RenderPagination";
import { sortByLocation } from "../../../utils/sortByLocation";

export const FeatureFilter = ({ cardData }) => {
    const [items, setItems] = useState([]); 

    useEffect(() => {
        console.log(cardData)
        setItems(cardData);
    }, []);

    // to-do sort by location using google cloud

    // sort by date
    const sortByDate = () => {
        // Sorting logic
        const sortedItems = [...items].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        setItems(sortedItems);
    };

    return (
        <Box width="75%" mx="auto" py={4} mt={24}>
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text fontSize="2xl" fontWeight="bold">Featured</Text>
                {/* Horizontal stack for the filtering icons */}
                <HStack spacing={4}>
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
                {/* Rendering the card templates, passing in the sorted data */}
                <WideCardsContainer data = {items}/>
        </Box>
       
    );
};
