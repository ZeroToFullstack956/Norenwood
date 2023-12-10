import React, { useState, useEffect } from "react";
import { FeatureFilter } from '../filtersTemplates/filter/featureFilter.jsx'
import mockData from '../../../mockData.json'

export const PropogateTemplates = ({ secondaryNavSelection }) => {

    const [cardDataObject, setCardDataObject] = useState();
    
    // check what tab the nav bar is on to render the content --to-do: this needs work
    useEffect(() => {
        switch (secondaryNavSelection) {
            case 'Community':
                setCardDataObject(mockData);
                // console.log(cardDataObject)
                break;
            case 'Business':
                // Code to execute
                break;
            case 'Students':
                // Code to execute
                break;
            default:
                console.log("default")
                console.log(secondaryNavSelection)
                // Code to execute when secondaryNavSelection doesn't match any case
        }
    }, [secondaryNavSelection]);

    useEffect(() => {
        // console.log(mockData)
    }, []);

    return (
        <>
        <FeatureFilter cardData = {cardDataObject} />
        </>
    );
};
