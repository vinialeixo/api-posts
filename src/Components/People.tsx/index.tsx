import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../../models/user";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const People = () => {
  const ITEMS_PER_PAGE = 10;

  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Definir a função getUsers dentro do hook useEffect, para que seja chamada apenas uma vez.
  useEffect(() => {
    setLoading(true);
    async function fetchUsers(page: number) {
      try {
        const { data } = await axios.get<User[]>(baseURL, {
          //a chamada da API é realizada utilizando o método axios.get
          headers: {
            Accept: "aplication/json",
          },
        });
        const total = Math.ceil(data.length / ITEMS_PER_PAGE);
        setTotalPages(total);
        setUsers(
          data.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
        );
        setCurrentPage(page);
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("error message: ", error.message);
          return error.message;
        } else {
          console.log("unexpected error: ", error);
          return "An unexpected error occurred";
        }
      }
    }
    fetchUsers(currentPage);
  }, [currentPage]);

  return (
    <Box maxW="1200px" mx="auto" px={4}>
      <Heading as="h1" mb={8} textAlign="center">
        User Posts
      </Heading>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <SimpleGrid columns={[2, null, 4]} spacing={4}>
          {users.map((user) => (
            <Card key={user.id}>
              <CardHeader>
                <Heading size="md">{user.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{user.body}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="teal">View here</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      )}

      <SimpleGrid columns={[1, null, 3]} mt={8}>
        {currentPage > 1 && (
          <Button onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </Button>
        )}

        <Text textAlign="center">
          {currentPage} / {totalPages}
        </Text>

        {currentPage <= totalPages - 1 && (
          <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
        )}
      </SimpleGrid>
    </Box>
  );
};
export default People;
