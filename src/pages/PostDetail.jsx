import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();

  // Placeholder post data
  const post = {
    id,
    title: `Post ${id}`,
    content: `This is the detailed content of post ${id}.`,
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>{post.title}</Heading>
      <Text mb={6}>{post.content}</Text>
      <Link to="/posts">
        <Button colorScheme="teal">Back to Posts</Button>
      </Link>
    </Box>
  );
};

export default PostDetail;