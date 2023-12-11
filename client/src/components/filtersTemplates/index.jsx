import React, { useState, useEffect } from "react";
import { FeatureFilter } from '../filtersTemplates/filter/featureFilter.jsx'
import mockData from '../../../mockData.json'

export const PropogateTemplates = ({ secondaryNavSelection }) => {
    // console.log("Received secondaryNavSelection in PropogateTemplates:", secondaryNavSelection);
    const [cardDataObject, setCardDataObject] = useState([]);
    
    // check what tab the nav bar is on to render the content --to-do: this needs work
    useEffect(() => {
        switch (secondaryNavSelection) {
            case 'Community':
                setCardDataObject(mockData);
                /// API call to get the community data
                break;
            case 'Business':
                setCardDataObject(mockData);
                // API call to get the business data
                break;
            case 'Students':
                // Code to execute
                break;
            case 'Events':
                // Code to execute
                break;
            case 'Services':
                // Code to execute
                break;
            default:
                console.log("default")
                // console.log(secondaryNavSelection)
                // Code to execute when secondaryNavSelection doesn't match any case
        }
    }, [secondaryNavSelection]);

    useEffect(() => {
        // console.log("cardDataObject updated:", cardDataObject);
    }, [cardDataObject]);

    return (
        <>
        <FeatureFilter cardData={cardDataObject} secondaryNavSelection={secondaryNavSelection} />
        </>
    );
};
