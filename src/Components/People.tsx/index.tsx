import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../../models/user";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const People = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Definir a função getUsers dentro do hook useEffect, para que seja chamada apenas uma vez.
  useEffect(() => {
    async function getUsers() {
      try {
        const { data, status } = await axios.get<User[]>(baseURL, {
          //a chamada da API é realizada utilizando o método axios.get
          headers: {
            Accept: "aplication/json",
          },
        });

        setUsers(data); // update the state variable with the data
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
    getUsers();
  }, []); // passar um array vazio como segundo argumento para o useEffect para que a função seja chamada apenas uma vez.

  useEffect(() => {
    console.log("passei aqui");
  }, []);

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {users.map((user) => (
        <Card key={user.id}>
          <CardHeader>
            <Heading size="md">{user.title}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{user.body}</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};
export default People;
