import React from "react";
import { Box, Button, Flex, Heading, ListItem } from "@chakra-ui/react";
import { FaRegStar } from "react-icons/fa";

const Bookmark = ({ site }) => (
  <ListItem p={4} borderWidth="1px" borderRadius="lg" mb={2} display="flex" alignItems="center" justifyContent="space-between">
    <Flex alignItems="center">
      <Box as="span" mr={3}>
        <FaRegStar />
      </Box>
      <Box>
        <Heading size="sm">{site.name}</Heading>
        <Box>
          {site.category} - {site.date}
        </Box>
      </Box>
    </Flex>
    <Button as="a" href={site.url} target="_blank" size="sm">
      Visit
    </Button>
  </ListItem>
);

export default Bookmark;
