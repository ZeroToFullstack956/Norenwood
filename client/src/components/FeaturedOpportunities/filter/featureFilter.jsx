import React, { useState, useEffect } from "react";
import { Box, Flex, Text, IconButton, HStack, VStack, Tooltip } from "@chakra-ui/react";
import { CalendarIcon, ViewIcon } from '@chakra-ui/icons';
import { EventCard } from "../wideCardTemplate/wideCard";
import mockData from '../../../../mockData.json'
import { RenderPagination } from "../../pagination/RenderPagination";
import { sortByLocation } from "../../../utils/sortByLocation";

export const FeatureFilter = () => {
    const [items, setItems] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        // Simulate an API call
        setItems(mockData);
    }, []);

    // use effect for your api call later
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // Replace with your actual API endpoint
    //             const response = await fetch("https://api-endpoint.com/events");
    //             const data = await response.json();
    //             setItems(data);
    //         } catch (error) {
    //             console.error("Error fetching data: ", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const sortByDate = () => {
        // Sorting logic for date
        const sortedItems = [...items].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        setItems(sortedItems);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
        <Box width="75%" mx="auto" py={4} mt={24}>
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text fontSize="2xl" fontWeight="bold">Featured</Text>

            {items.length > itemsPerPage && <RenderPagination 
                items={items} 
                currentPage={currentPage} 
                itemsPerPage={itemsPerPage} 
                handlePageChange={handlePageChange} 
            />}

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

            <VStack spacing={4}>
                {currentItems.map((item, index) => (
                    <EventCard 
                      key={index} 
                      image={item.image} 
                      address={item.address}
                      date={item.date}
                      title={item.title}
                      time={item.time}
                      description={item.description}
                    />
                ))}
            </VStack>
            <RenderPagination 
                    items={items} 
                    currentPage={currentPage} 
                    itemsPerPage={itemsPerPage} 
                    handlePageChange={handlePageChange} 
                />
       
        </Box>
        </>
    );
};
