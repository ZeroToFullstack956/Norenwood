import { LandingNav } from "./landingNav";
import { HeroImage } from "../../../homeBanner/hero/heroImage";
import { HeroText } from "../../../homeBanner/hero/heroText";
import { Flex, Box } from '@chakra-ui/react';

export const LandingUnderlay = ({ isCheckboxChecked }) => {
    return (
        <Flex direction="column" height="100vh" justify="space-between" overflow="hidden">
            <Box>
                {/* Assuming LandingNav should stay at the top */}
                <LandingNav />
            </Box>
            <Flex justify="center" align="flex-end" pb="20vh" width="100%">
                <Box flex="2" transform="scale(0.75)" >
                    <HeroText isCheckboxChecked={isCheckboxChecked} />
                </Box>
                <Box flex="1" transform="scale(1)" >
                    <HeroImage isCheckboxChecked={isCheckboxChecked}/>
                </Box>
            </Flex>
        </Flex>
    );
}
