import React, { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, List, ListItem, Stack, Textarea, useDisclosure, VStack } from "@chakra-ui/react";
import { FaPlus, FaRegStar } from "react-icons/fa";

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

const Index = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [newBookmark, setNewBookmark] = useState({ url: "", category: "", note: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addBookmark = () => {
    setBookmarks([
      ...bookmarks,
      {
        ...newBookmark,
        name: "Site Name", // Placeholder for site name
        date: new Date().toLocaleString(),
        icon: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwaWNvbnxlbnwwfHx8fDE3MTA3NDk2NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080', // Placeholder for site icon
      },
    ]);
    setNewBookmark({ url: "", category: "", note: "" });
    onClose();
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading>My Bookmarks</Heading>
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onOpen}>
          Add Bookmark
        </Button>
        {isOpen && (
          <Box borderWidth="1px" borderRadius="lg" p={4} w="full">
            <Stack spacing={3}>
              <FormControl isRequired>
                <FormLabel>URL</FormLabel>
                <Input placeholder="https://example.com" value={newBookmark.url} onChange={(e) => setNewBookmark({ ...newBookmark, url: e.target.value })} />
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Input placeholder="Work" value={newBookmark.category} onChange={(e) => setNewBookmark({ ...newBookmark, category: e.target.value })} />
              </FormControl>
              <FormControl>
                <FormLabel>Note</FormLabel>
                <Textarea placeholder="Remember to check out their blog..." value={newBookmark.note} onChange={(e) => setNewBookmark({ ...newBookmark, note: e.target.value })} />
              </FormControl>
              <Button colorScheme="blue" onClick={addBookmark}>
                Save
              </Button>
            </Stack>
          </Box>
        )}
        <List w="full">
          {bookmarks.map((bookmark, index) => (
            <Bookmark key={index} site={bookmark} />
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
