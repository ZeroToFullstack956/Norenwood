import { LandingNav } from "./landingNav";
import { Hero } from "../../../homeBanner/hero/hero";
import { Flex, Box } from '@chakra-ui/react';

export const LandingUnderlay = ({ isCheckboxChecked }) => {
    return (
        <Flex direction="column" height="100vh" justify="space-between" overflow="hidden">
            <Box>
                <LandingNav />
            </Box>
            <Flex justify="center" align="flex-end" pb="20vh" width="100%">
                <Hero isCheckboxChecked={isCheckboxChecked}/>
            </Flex>
        </Flex>
    );
}
