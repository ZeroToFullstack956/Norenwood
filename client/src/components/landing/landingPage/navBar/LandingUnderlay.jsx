import { LandingNav } from "./landingNav";
import { Hero } from "../../../homeBanner/hero/hero";
import { Flex, Box } from '@chakra-ui/react';

export const LandingUnderlay = ({ isCheckboxChecked }) => {
    return (
        <Flex 
            direction={{ base: "column", md: "column", lg: "row" }} 
            height="100vh" 
            justify={{ base: "center", md: "center", lg: "flex-start" }} 
            align={{ base: "center", md: "center", lg: "center" }} 
            overflow="hidden"
            ml={{ base: "21%", md: "center", lg: "10%" }} // paddingLeft of 10% for large screen size and higher.
        >
            <Box>
                <LandingNav />
            </Box>
            <Flex 
                justify="center" 
                align="center" 
                width="100%"
            >
                <Hero isCheckboxChecked={isCheckboxChecked} />
            </Flex>
        </Flex>
    );
}
