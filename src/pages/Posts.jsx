import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Posts = () => {
  // Placeholder posts data
  const posts = [
    { id: 1, title: "First Post", excerpt: "This is the excerpt for the first post." },
    { id: 2, title: "Second Post", excerpt: "This is the excerpt for the second post." },
  ];

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>Posts</Heading>
      <VStack spacing={4} align="stretch">
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.excerpt}</Text>
            <Link to={`/posts/${post.id}`}>
              <Button mt={4} colorScheme="teal">Read More</Button>
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Posts;