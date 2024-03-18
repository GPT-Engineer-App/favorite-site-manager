import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
    <Flex align="center" mr={5}>
      <Heading as="h1" size="lg">
        <Link to="/">My Bookmarks</Link>
      </Heading>
    </Flex>
    <Spacer />
    <Box>{}</Box>
  </Flex>
);

export default Navigation;
