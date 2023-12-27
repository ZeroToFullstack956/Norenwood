import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";


export const Announcement = () => {

let marquee = ["This", "text", "is", "for", "testing", "purposes", "hope", "it", "works."]

    return(
        <Box>
        <Button type="button"
            w="100%"
            p="1px 1px"
            mx={2}
            overflow="hidden"
            whiteSpace="nowrap"
            display="flex"
            color="#E5E42E"
            border-borderColor="none"
            lineHeight="1"
            fontSize="1.25rem"
            textTransform="uppercase"
            fontFamily="Work Sans"
            border="none"
            top="18vh"
            borderBottom="2px solid #E5E4E2"
            backgroundColor="black"
            _hover={{ backgroundColor: "rgba(51, 51, 51, 0.025)",
            "> span": { animationPlayState: "paused" } // Targeting child spans on hover
          }}
          sx={{
            "@keyframes marquee": {
              to: { transform: "translateX(-100%)" },
            }
          }}
        >
        {marquee.map((item, index) => (
          <Text 
            key={index}
            as="span" 
            sx={{
              animation: `marquee ${5}s infinite normal linear`,
              padding: "0 0.5em",
            }}>{item}</Text>
        ))}

        </Button>
      </Box>

    )
}