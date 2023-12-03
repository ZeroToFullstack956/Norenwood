import { Box, HStack, Text, Link } from '@chakra-ui/react';

export const LandingNav = () => {
  const navItems = ["For Business", "For Students", "Community", "Login/Sign-up"];

  return (
    <HStack
      spacing={4} // Adjust the space between nav items
      align="center"
      justify="flex-end" // Align items to the right
      paddingY={2} // Vertical padding
      paddingX={6} // Horizontal padding
      width="100%"
      maxWidth={{ base: "20%", md: "40%" }} // Adjust maxWidth according to your layout
      background="transparent" // Optional background styling
      mixBlendMode="darken"
    >
      {navItems.map((item, index) => (
        <Link
          key={index}
          href="#" // Replace with logic for links links
          fontFamily="Inter"
          lineHeight="1.5"
          fontWeight="semibold"
          fontSize="16px" // Slightly larger font size
          color="#000000"
          _hover={{ color: "#F2994A", textDecoration: "underline" }}
        >
          {item}
        </Link>
      ))}
    </HStack>
  );
};
