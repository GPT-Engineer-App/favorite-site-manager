import React, { useState } from "react";
import { Box, Button, Container, Heading, List, useDisclosure, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Bookmark from "../components/Bookmark";
import BookmarkForm from "../components/BookmarkForm";

const Index = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [newBookmark, setNewBookmark] = useState({ url: "", category: "", note: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addBookmark = () => {
    setBookmarks([
      ...bookmarks,
      {
        ...newBookmark,
        name: "Site Name",
        date: new Date().toLocaleString(),
        icon: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwaWNvbnxlbnwwfHx8fDE3MTA3NDk2NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      },
    ]);
    setNewBookmark({ url: "", category: "", note: "" });
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
            <BookmarkForm newBookmark={newBookmark} setNewBookmark={setNewBookmark} addBookmark={addBookmark} onClose={onClose} />
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
