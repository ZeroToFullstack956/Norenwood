import React, { useState, useEffect } from 'react';
import { VStack } from '@chakra-ui/react';
import { RenderPagination } from '../../../pagination/RenderPagination';
import { DynamicCard } from '../dynamicCard';

export const DynamicCardContainer = ({ data }) => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCard, setSelectedCard] = useState(data[0]);
    const itemsPerPage = 3;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleCardSelect = (card) => {
        setSelectedCard(card);
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items ? items.slice(indexOfFirstItem, indexOfLastItem) : [];

    useEffect(() => {
        if (data) {
            setItems(data);
        }
    }, [data]);

    return (
        <>
            {currentItems.map((item, index) => (
                <DynamicCard 
                    key={index}
                    cardData={item}
                    isSelected={item === selectedCard}
                    onSelect={() => handleCardSelect(item)}
                />
            ))}
            <RenderPagination
                items={data}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                handlePageChange={handlePageChange}
            />
        </>
    );
};
