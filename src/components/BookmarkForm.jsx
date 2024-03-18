import React from "react";
import { Button, FormControl, FormLabel, Input, Stack, Textarea } from "@chakra-ui/react";

const BookmarkForm = ({ newBookmark, setNewBookmark, addBookmark, onClose }) => (
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
    <Button
      colorScheme="blue"
      onClick={() => {
        addBookmark();
        onClose();
      }}
    >
      Save
    </Button>
  </Stack>
);

export default BookmarkForm;
